export const convertDmToFoot = (dm: number) => {
  const result = dm / 3.048;
  const final = result.toFixed(2);
  return final;
};

export const fixKg = (dm: number) => {
  const result = dm / 10;
  return result;
};
