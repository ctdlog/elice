import React from "react";
import DisplayTime from "./DisplayTime";

const InputTime = () => {
  const [seconds, setSeconds] = React.useState(0);
  // re-render : props, state 가 변경됐을 때

  return (
    <div>
      {/* Component : 독립적이고 재사용 가능 */}
      <DisplayTime seconds={seconds} setSeconds={setSeconds} scale="초" />
      <DisplayTime seconds={seconds} setSeconds={setSeconds} scale="분" />
      <DisplayTime seconds={seconds} setSeconds={setSeconds} scale="시간" />
    </div>
  );
};

export default InputTime;
