import { useState } from "react";
import words from "./word-list.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    // Random word from existing word list
    return words[Math.floor(Math.random() * words.length)];
  });
  console.log(wordToGuess);
  return <h1>Welcome!</h1>;
}

export default App;
