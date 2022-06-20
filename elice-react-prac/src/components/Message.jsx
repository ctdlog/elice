import React, { useEffect, useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [renderEnded, setRenderEnded] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    alert(`Message: ${message}, Input: ${message}`);
  };

  useEffect(() => {
    setTimeout(() => {
      setRenderEnded("렌더링이 끝났습니다!");
    }, 2000);
  }, []);

  useEffect(() => {
    setMessage(inputValue);
  }, [inputValue]);

  return (
    <>
      {renderEnded ? (
        <div>
          <h1>{renderEnded}</h1>
          <h1>Message: {message}</h1>
          <input onChange={handleChange} value={inputValue} />
          <button onClick={handleClick}>alert</button>
        </div>
      ) : (
        <h1>렌더링 중입니다..</h1>
      )}
    </>
  );
};

export default Message;
