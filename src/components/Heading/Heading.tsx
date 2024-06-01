import useTime from "services/useTime";
import { ChildrenProps } from "utils/types/props/types";

interface HeadingProps extends ChildrenProps {
  title: string;
}

const Heading = ({ children }: HeadingProps) => {
  const { time } = useTime("hours");

  return (
    <div className="heading">
      <h1 className={`heading__title heading__title--${time}`}>Projects</h1>
      {children}
    </div>
  );
};

export default Heading;
