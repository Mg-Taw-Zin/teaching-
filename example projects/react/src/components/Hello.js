import React from "react";

const Hello = () => {
  // return (
  //   <div className="Hello" id="hello">
  //     <h1>Hello ALEX</h1>
  //   </div>
  // );

  return React.createElement(
    "div",
    { id: "hello", className: "Hello" },
    React.createElement("h1", null, "Hello Alex")
  );
};

export default Hello;
