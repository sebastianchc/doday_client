import useTime from "services/useTime";

const Logo = () => {
  const { time } = useTime("hours");

  return (
    <div className={`logo logo--${time}`}>
      <div className={`logo__icon-primary logo__icon--${time}`}></div>
      <div className={`logo__satelite logo__satelite--${time}`}>
        <div className={`logo__icon-secondary logo__icon--${time}`}></div>
      </div>
    </div>
  );
};

export default Logo;
