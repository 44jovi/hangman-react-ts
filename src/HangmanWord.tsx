export function HangmanWord() {
  const word = "hello";
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "san-serif",
      }}
    >
      {word}
    </div>
  );
}
