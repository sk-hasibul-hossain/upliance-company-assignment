import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const customStyle = {
    backgroundColor: `rgba(0, 0, 255, ${count / 10})`,
    height: count <= 10 ? `${count * 10}%` : "100%",
    transition: "700ms",
  };

  return (
    <div className="counter-container">
      <h1>Count: {count}</h1>
      <button
        className={count < 10 && "active"}
        onClick={incrementCount}
        disabled={count >= 10}
      >
        Increment
      </button>
      <button
        className={count > 0 && "active"}
        onClick={decrementCount}
        disabled={count <= 0}
      >
        Decrement
      </button>
      <button
        className={count > 0 ? "active" : ""}
        onClick={resetCount}
        disabled={count <= 0}
        style={{ marginBottom: "16px" }}
      >
        Reset
      </button>
      <div className="counter-bar" style={customStyle}></div>
    </div>
  );
};

export default Counter;
