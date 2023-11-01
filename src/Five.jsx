//Implement a basic toggle switch component.
//import React from 'react'

import { useState } from "react";

function Five() {
  const [isToggled, setIsToggled] = useState(true);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div>
      <label>
      <input type="text"/>
        <input type="checkbox" onChange={handleToggle} />
      </label>
      <p>{isToggled ? "True" : "False"}</p>
    </div>
  );
}

export default Five;
