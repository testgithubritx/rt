import React from "react";

const FunProps = ({ name, title, age, children }) => {
  return (
    <div>
      <p>
        My name is {name} and my title is {title} and my age is {age}
      </p>
      <p>i like to play {children}</p>
    </div>
  );
};
export default FunProps;
