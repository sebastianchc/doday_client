import { useEffect, useState } from "react";
import getTimeByIUnit from "utils/helpers/getTimeByUnit";

const useTime = (unit: string): { time: number } => {
  const [time, setTime] = useState(getTimeByIUnit(unit));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeByIUnit(unit));
    }, 1000);
    return () => clearInterval(interval);
  }, [unit]);

  return { time };
};

export default useTime;
