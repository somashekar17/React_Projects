//import React from 'react'

import { useState } from "react";
import "./Eighteen.css"; // Import your CSS file

export default function Eighteen() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="menu-icon" onClick={toggleMenu}>
        ≡
      </button>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
