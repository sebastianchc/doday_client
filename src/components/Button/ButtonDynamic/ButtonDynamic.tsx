import useTime from "services/useTime";
import { ButtonProps } from "utils/types/props/types";

interface ButtonDynamicProps extends ButtonProps {}

const ButtonDynamic = ({ children, type, onClick }: ButtonDynamicProps) => {
  const { time } = useTime("hours");

  return (
    <button
      className={`button-dynamic button-dynamic--${time}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonDynamic;
