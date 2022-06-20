import React, { useState } from "react";

const Hello = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <div onClick={() => alert("알림!")}>alert!</div>
      <span>{num}</span>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
};

export default Hello;
