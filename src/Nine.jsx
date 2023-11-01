//Create a component that changes its background color when clicked
//import React from 'react'
import { useState } from "react";

function Nine() {
  const [backgroundColor, setBackgroundColor] = useState("black");

  const handleClick = () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: backgroundColor,
        width: "100vw", 
        height: "100vh", 
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button>Click me to change the color</button>
    </div>
  );
}

export default Nine;
