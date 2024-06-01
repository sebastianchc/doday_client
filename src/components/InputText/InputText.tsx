import { ChangeEvent } from "react";
import useTime from "services/useTime";
import { ComponentProps } from "utils/types/props/types";

interface InputTextProps extends ComponentProps {
  forName?: boolean;
  placeholder: string;
}

const InputText = ({
  state,
  setState,
  property,
  forName,
  placeholder,
}: InputTextProps) => {
  const { time } = useTime("hours");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <input
      className={`input-text input-text--${time} ${
        forName ? "input-text--for-name" : ""
      }`}
      type="text"
      value={state[property]}
      name={property}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default InputText;
