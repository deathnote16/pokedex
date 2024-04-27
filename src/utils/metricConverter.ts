export const convertDmToFoot = (dm: any) => {
  const result = dm / 3.048;
  const final = result.toFixed(2);
  return final;
};

export const fixKg = (dm: any) => {
  const result = dm / 10;
  return result;
};
