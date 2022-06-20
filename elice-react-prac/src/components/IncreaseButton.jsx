import React from "react";

const IncreaseButton = (props) => {
  const handleIncreaseClick = () => {
    props.setCount(props.count + 1);
  };
  return <button onClick={handleIncreaseClick}>+</button>;
};

export default IncreaseButton;
