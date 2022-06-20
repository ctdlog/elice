import React, { useState } from "react";
import Display from "./Display";
import IncreaseButton from "./IncreaseButton";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecreaseClick = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <>
      <Display count={count} />
      <IncreaseButton count={count} setCount={setCount} />
      <button onClick={handleDecreaseClick}>-</button>
    </>
  );
};

export default Counter;
