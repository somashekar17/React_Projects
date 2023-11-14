/* eslint-disable react/prop-types */
//Build a search bar that filters a list of items based on user input.
//import React from 'react'

import { useState } from "react";
import './Fifteen.css'

export default function Fifteen({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)} // Fix the typo here
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
