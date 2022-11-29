import { useState } from "react";
import words from "./word-list.json";

function App() {
  // Word to be guessed
  const [wordToGuess, setWordToGuess] = useState(() => {
    // Random word from existing word list
    return words[Math.floor(Math.random() * words.length)];
  });

  // Letters guessed - set type to array of strings
  const [lettersGuessed, setLettersGuessed] = useState<string[]>([]);
  return <h1>Welcome!</h1>;
}

export default App;
