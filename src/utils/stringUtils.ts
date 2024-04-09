export const removeEscapeSequence = (stringWord?: string) => {
  const result = stringWord?.replace(/[\n\f]/g, ' ');
  return result;
};
