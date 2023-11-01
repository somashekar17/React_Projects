//Build a timer that counts down from a specified time.
//import React from 'react'

import { useEffect, useState } from "react";

function Seven() {
  const [time, setTime] = useState(60);
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 100);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [time]);
  return (
    <div>
      <h1>Time Left:{time} second</h1>
    </div>
  );
}

export default Seven;
