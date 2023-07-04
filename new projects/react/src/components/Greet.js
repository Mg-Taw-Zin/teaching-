import React from "react";

// function Greet () {
//     return <h1>Hello ALEX</h1>
// }

export const Greet = ({ name, heroName }) => {
  // console.log(props);
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {/* {props.children} */}
    </div>
  );
};

// export default Greet;
