import { useCallback, useEffect, useState } from "react";
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

  // Incorrect letters guessed
  const incorrectLetters = lettersGuessed.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  // Player keyboard presses
  // useCallback() used to prevent unnecessary recreation of this function and re-rendering event handler
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (lettersGuessed.includes(letter)) return;

      setLettersGuessed((currentLettersGuessed) => [
        ...currentLettersGuessed,
        letter,
      ]);
    },
    // Function only re-runs if this changes
    [lettersGuessed]
  );

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key;

      // Ignore non-alphabetic keypresses
      if (!key.match(/^[a-z]$/)) return;

      // Prevent default behaviour of the keypress
      event.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [lettersGuessed]);

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
      <HangmanDiagram guessCount={incorrectLetters.length} />
      <HangmanWord lettersGuessed={lettersGuessed} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <HangmanKeyboard
          activeLetters={lettersGuessed.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
