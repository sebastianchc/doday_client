const getTimeByIUnit = (unit: string): number => {
  if (unit === "seconds") {
    return new Date().getSeconds();
  } else if (unit === "minutes") {
    return new Date().getMinutes();
  } else if (unit === "hours") {
    return new Date().getHours();
  }
  return -1;
};

export default getTimeByIUnit;
