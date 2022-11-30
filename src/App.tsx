import { useState } from "react";
import { HangmanDiagram } from "./HangmanDiagram";
import { HangmanKeyboard } from "./HangmanKeyboard";
import { HangmanWord } from "./HangmanWord";
import words from "./word-list.json";

function App() {
  // Word to be guessed
  const [wordToGuess, setWordToGuess] = useState(() => {
    // Random word from existing word list
    return words[Math.floor(Math.random() * words.length)];
  });

  // Letters guessed - set type to array of strings
  const [lettersGuessed, setLettersGuessed] = useState<string[]>([]);

  // Main game div
  return (
    <div
      style={{
        maxWidth: "800 px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      {/* Main game message based on game state */}
      <div
        style={{ fontSize: "2rem", fontFamily: "arial", textAlign: "center" }}
      >
        PLACEHOLDER
      </div>

      {/* Custom components */}
      <HangmanDiagram />
      <HangmanWord />
      <div style={{ alignSelf: "stretch" }}>
        <HangmanKeyboard />
      </div>
    </div>
  );
}

export default App;
