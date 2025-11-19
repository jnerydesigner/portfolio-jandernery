import { calculateElapsedTimeParts } from "../utils/calculate-elapsed-time-parts";

interface Props {
  title: string;
  date: string;
  language: string;
}

export function ExperienceCard({ title, date, language }: Props) {
  const { labelYears, month, year, error } = calculateElapsedTimeParts(
    date,
    language
  );

  if (error) return <p>{error}</p>;

  return (
    <div className="bg-green-400 text-black px-2 py-1 rounded-xl flex flex-col items-center space-y-1 w-full">
      <p className="font-semibold text-[1.2rem]">{title}</p>
      <p>{labelYears}</p>
      <p className="capitalize">{month}</p>
      <p>{year}</p>
    </div>
  );
}
