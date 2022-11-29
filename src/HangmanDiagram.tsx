const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "25%",
      border: "10px solid purple",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  ></div>
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "purple",
      position: "absolute",
      right: 0,
      top: 120,
    }}
  ></div>
);

export function HangmanDiagram() {
  // Main div
  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      {BODY}
      {/* Small vertical bar */}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      ></div>
      {/* Top horizontal bar */}
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      {/* Central vertical bar */}
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{ height: "10px", width: "250px", background: "black" }}
      ></div>
    </div>
  );
}
