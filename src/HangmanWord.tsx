type HangmanWordProps = {
  lettersGuessed: string[];
  wordToGuess: string;
  revealWord?: boolean;
};

export function HangmanWord({
  lettersGuessed,
  wordToGuess,
  revealWord = false,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "arial",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                lettersGuessed.includes(letter) || revealWord
                  ? "visible"
                  : "hidden",
              color:
                !lettersGuessed.includes(letter) && revealWord
                  ? "red"
                  : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
