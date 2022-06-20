import React from "react";

// props
// : seconds
// : handleChange func
// : scale
const DisplayTime = (props) => {
  const convertUpTime = (seconds, scale) => {
    if (scale === "분") {
      return seconds / 60;
    } else if (scale === "시간") {
      return seconds / 60 / 60;
    } else {
      return seconds;
    }
  };

  const convertDownTime = (value, scale) => {
    if (scale === "분") {
      return value * 60;
    } else if (scale === "시간") {
      return value * 60 * 60;
    } else {
      return value;
    }
  };

  const handleChange = (event, scale) => {
    // 입력된 값 : event.target.value
    // alert(event.target.value);
    // re-render될려면, props 혹은 state 값이 변화가 있어야 함
    //
    // setSeconds(convertDownTime(event.target.value, undefined));
    props.setSeconds(convertDownTime(event.target.value, scale));
  };

  return (
    <div>
      <input
        value={convertUpTime(props.seconds, props.scale)}
        onChange={(event) => {
          handleChange(event, props.scale);
        }}
      />{" "}
      {props.scale}
    </div>
  );
};

export default DisplayTime;
