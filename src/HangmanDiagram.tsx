const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "25%",
      border: "10px solid purple",
      position: "absolute",
      top: 50,
      right: -30,
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
      top: 120,
      right: 0,
    }}
  ></div>
);

const ARM_RIGHT = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "purple",
      position: "absolute",
      top: 150,
      right: -100,
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const ARM_LEFT = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "purple",
      position: "absolute",
      top: 150,
      right: 10,
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);

export function HangmanDiagram() {
  // Main div
  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      {BODY}
      {ARM_RIGHT}
      {ARM_LEFT}

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
