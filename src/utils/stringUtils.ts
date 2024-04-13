export const removeEscapeSequence = (stringWord?: string) => {
  const result = stringWord?.replace(/[\n\f]/g, ' ');
  return result;
};

export const convertStatName = (stat?: string) => {
  if (stat === 'special-attack') {
    return 'sp-atk';
  }
  if (stat === 'special-defense') {
    return 'sp-def';
  }
  return stat;
};

export const convertStatPercentageString = (stat: number) => {
  const result = (stat / 280) * 100;
  return result.toString();
};
