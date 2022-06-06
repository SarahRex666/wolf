import React, { useState } from "react";
import "./App.css";

function Drop() {
  const [lightMode, setLightMode] = useState(true);

  function handleClick(value) {
    setLightMode(false);
  }

  function handleClick2(value) {
    setLightMode(true);
  }
  return (
    <div>
      <div>Choose one:</div>
      <button onClick={handleClick2}></button>
      <button onClick={handleClick}></button>
    </div>
  );
}

export default Drop;
