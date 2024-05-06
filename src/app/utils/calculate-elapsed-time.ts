export function calculateElapsedTime(dateStr: string) {
  const dateNow = new Date();

  try {
    const dateProvided = new Date(dateStr);

    const differenceMilliseconds = Number(dateNow) - Number(dateProvided);

    const yearscomplete = differenceMilliseconds / (1000 * 60 * 60 * 24 * 365);

    const fullYears = Math.floor(yearscomplete);

    const monthYearStr = dateProvided.toLocaleDateString("pt-BR", {
      month: "long",
      year: "numeric",
    });

    const result = `${fullYears} anos Desde ${monthYearStr}`;

    return result;
  } catch (error) {
    return "Invalid date format. Use YYYY-mm-dd format.";
  }
}
