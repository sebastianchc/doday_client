import useTime from "services/useTime";
import { ButtonProps, TimeProps } from "utils/types/props/types";

interface ButtonStaticProps extends ButtonProps {
  calledFrom: string;
}

const ButtonStatic = ({
  children,
  type,
  onClick,
  calledFrom,
}: ButtonStaticProps) => {
  const { time } = useTime("hours");

  return (
    <button
      className={`button-static-${calledFrom} button-static-${calledFrom}--${time}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonStatic;
