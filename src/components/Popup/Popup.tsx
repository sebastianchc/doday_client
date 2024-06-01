import { BlackCross, WhiteCross } from "assets/images";
import { ButtonDynamic, ButtonStatic } from "components/Button";
import { FormEventHandler, useEffect } from "react";
import useTime from "services/useTime";
import {
  ChildrenProps,
  SetStateProps,
  StateProps,
} from "utils/types/props/types";
import shortid from "shortid";

interface PopupProps extends ChildrenProps, StateProps, SetStateProps {
  onSubmit: FormEventHandler<HTMLElement>;
  onClose: () => void;
  popupStatus: string;
}

const Popup = ({
  children,
  onSubmit,
  onClose,
  popupStatus,
  state,
  setState,
}: PopupProps) => {
  const { time } = useTime("hours");

  useEffect(() => {
    setState({ ...state, id: shortid.generate() });
  }, []);

  return (
    <div className="popup-background">
      <div className={`popup popup--${time}`}>
        <form className="popup-form" onSubmit={onSubmit}>
          <div className="popup-form-heading">
            <ButtonStatic type="button" onClick={onClose} calledFrom="sidebar">
              {time === 11 || time === 12 ? <WhiteCross /> : <BlackCross />}
            </ButtonStatic>
          </div>
          <div></div>
          {children}
          <div className="popup-form-submit">
            <ButtonDynamic type="submit">
              <p className={`popup-form-submit__text--${time}`}>{popupStatus}</p>
            </ButtonDynamic>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
