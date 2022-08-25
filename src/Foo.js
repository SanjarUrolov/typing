import React, { useRef } from "react";

function Foo() {
  let guruhNomi = useRef(null);

  const myFunction = () => {
    let displayValue = guruhNomi.current.style.display;
    guruhNomi.current.style.display =
      displayValue === "none" ? "block" : "none";
  };

  return (
    <div>
      <h1>Foo</h1>
      <button onClick={myFunction}>Bos</button>
      <h2 ref={guruhNomi}>G4</h2>
    </div>
  );
}

export default Foo;