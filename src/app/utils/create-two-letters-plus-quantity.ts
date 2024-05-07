const GetMostFrequentLetters = (sentence: string) => {
  let frequency: { [key: string]: number } = {};
  const firstLetter = sentence[0].toLowerCase();

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i].toLowerCase();
    if (letter !== " ") {
      frequency[letter] = (frequency[letter] || 0) + 1;
    }
  }

  frequency[firstLetter] = (frequency[firstLetter] || 0) + 1000;

  const sortedLetters = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
  return sortedLetters
    .slice(0, 2)
    .map((letter) => letter[0])
    .join("")
    .toUpperCase();
};

export { GetMostFrequentLetters };
