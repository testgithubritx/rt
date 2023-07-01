import React, { useState } from "react";
const FunState1 = () => {
  const [data, setData] = useState("react");
  const [count, setCount] = useState(0);
  const change = () => {
    setData("angular");
  };
  const incress = () => {
    setCount(count + 10);
  };
  return (
    <div>
      <center>
        <h1>my name is kartick</h1>
        {data}
        <br />
        <button onClick={change}>change</button>
        <br />
        {count}
        <br />
        <button onClick={incress}>Incress</button>
      </center>
    </div>
  );
};
export default FunState1;
