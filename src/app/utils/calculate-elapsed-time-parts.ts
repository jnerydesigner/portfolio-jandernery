export function calculateElapsedTimeParts(dateStr: string, language: string) {
  const now = new Date();
  const provided = new Date(dateStr);

  if (isNaN(provided.getTime())) {
    return {
      years: null,
      labelYears: "",
      month: "",
      year: "",
      error: "Invalid date format. Use YYYY-mm-dd.",
    };
  }

  const diffMs = now.getTime() - provided.getTime();
  const years = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365));

  const locale = language === "porfolio-pt" ? "pt-BR" : "en-US";

  const month = provided.toLocaleDateString(locale, {
    month: "long",
  });

  const year = provided.getFullYear();

  const labelYears =
    language === "porfolio-pt" ? `${years} anos desde` : `${years} years since`;

  return {
    years,
    labelYears,
    month,
    year,
    error: null,
  };
}
