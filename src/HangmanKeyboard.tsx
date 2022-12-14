import styles from "./HangmanKeyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type HangmanKeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  // Return value void - function is a side effect / action
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

export function HangmanKeyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: HangmanKeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const active = activeLetters.includes(key);
        const inactive = inactiveLetters.includes(key);
        return (
          <button
            className={`${styles.btn} ${active ? styles.active : ""} ${
              inactive ? styles.inactive : ""
            }`}
            disabled={active || inactive || disabled}
            key={key}
            onClick={() => addGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
