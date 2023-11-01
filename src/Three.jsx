// create a form that takes user input and display it in real time.

import { useState } from "react";

//import React from 'react'

function Three() {
  const [data, setData] = useState("");

  return (
    <div>
      <input
        className="text"
        type="text"
        onChange={(e) => setData(e.target.value)}
      />
      <p>User Data:{data}</p>
    </div>
  );
}

export default Three;
