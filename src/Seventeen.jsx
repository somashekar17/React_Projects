//Build a color picker that allows users to select a color
//import React from 'react'

import { useState } from "react";

export default function Seventeen() {
  const [selectColor, setSelectColor] = useState('#fdf');

  const handleChange = (e) => {
    setSelectColor(e.target.value);
  };

  return (
    <div>
      <input type="color" onChange={handleChange} />
      <div style={{ width: '100vh', height: '100vh', background: selectColor }}></div>
    </div>
  );
}
