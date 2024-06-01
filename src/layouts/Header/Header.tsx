import { BlackHelp, BlackMenu, WhiteHelp, WhiteMenu } from "assets/images";
import { ButtonDynamic } from "components/Button";
import { Dispatch, SetStateAction } from "react";
import { Logo } from "components";
import { TimeProps } from "utils/types/props/types";

export interface HeaderProps extends TimeProps {
  sideBarIsOpen: boolean;
  setSideBarIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ time, sideBarIsOpen, setSideBarIsOpen }: HeaderProps) => {
  return (
    <header className={`header header--${time}`}>
      <ButtonDynamic
        type="button"
        onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
      >
        {time === 11 || time === 12 ? <BlackMenu /> : <WhiteMenu />}
      </ButtonDynamic>
      <Logo />
      <ButtonDynamic type="button">
        {time === 11 || time === 12 ? <BlackHelp /> : <WhiteHelp />}
      </ButtonDynamic>
    </header>
  );
};

export default Header;
