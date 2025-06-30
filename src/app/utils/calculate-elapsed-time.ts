export function calculateElapsedTime(dateStr: string, language: string) {
  const dateNow = new Date();

  try {
    const dateProvided = new Date(dateStr);

    const differenceMilliseconds = Number(dateNow) - Number(dateProvided);

    const yearscomplete = differenceMilliseconds / (1000 * 60 * 60 * 24 * 365);

    const fullYears = Math.floor(yearscomplete);

    let monthYearStr = dateProvided.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

    let result = `${fullYears} years since ${monthYearStr}`;

    if (language === "porfolio-pt") {
      monthYearStr = dateProvided.toLocaleDateString("pt-BR", {
        month: "long",
        year: "numeric",
      });
      result = `${fullYears} anos Desde ${monthYearStr}`;
    }

    return result;
  } catch (error) {
    return "Invalid date format. Use YYYY-mm-dd format.";
  }
}
