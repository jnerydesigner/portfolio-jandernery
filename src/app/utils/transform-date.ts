export const transformDateBR = (date: string): string => {
  if (date === null || date === undefined) {
    return "Atualmente";
  }
  const dateSpl = date.split("-");

  return `${dateSpl[2]}/${dateSpl[1]}/${dateSpl[0]}`;
};
