//import React from 'react'
import './two.css'
import { useState } from "react";

function Two() {
    const [count, setCount] = useState(0);
    return (
      <div className="main-container">
        <span>{count}</span>
        <div className="button">
          <button className="add" onClick={() => setCount(count + 1)}>+</button>
          <button className="del" onClick={() => setCount(count - 1)}>-</button>
        </div>
      </div>
    );
  }
  

export default Two;
