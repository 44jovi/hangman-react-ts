const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "25%",
      border: "10px solid fuchsia",
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
      background: "fuchsia",
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
      background: "fuchsia",
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
      background: "fuchsia",
      position: "absolute",
      top: 150,
      right: 10,
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);

const LEG_RIGHT = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "fuchsia",
      position: "absolute",
      top: 210,
      right: -90,
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const LEG_LEFT = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "fuchsia",
      position: "absolute",
      top: 210,
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);

export function HangmanDiagram() {
  // Main div
  return (
    <div style={{ position: "relative" }}>
      {/* Person */}
      {HEAD}
      {BODY}
      {ARM_RIGHT}
      {ARM_LEFT}
      {LEG_RIGHT}
      {LEG_LEFT}

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
