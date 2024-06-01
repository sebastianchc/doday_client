import { ChangeEvent } from "react";
import useTime from "services/useTime";
import { ComponentProps } from "utils/types/props/types";

interface TextareaProps extends ComponentProps {
  placeholder: string;
}

const Textarea = ({
  state,
  setState,
  property,
  placeholder,
}: TextareaProps) => {
  const { time } = useTime("hours");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <textarea
      className={`textarea textarea--${time}`}
      value={state[property]}
      name={property}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
