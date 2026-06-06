import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("Hello React");

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>{text}</h1>

      <button onClick={() => setText("You clicked the button!")}>
        Click Me
      </button>
    </div>
  );
}
