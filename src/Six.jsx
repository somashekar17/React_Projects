//Create a component that fetches data from an API and displays it.
//import React from 'react'

import { useEffect, useState } from "react";

function Six() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <h1>ID:{data.id}</h1>
          <h2>Title:{data.title}</h2>
          <h2>Description:{data.description}</h2>
          <h2>Price:{data.price}</h2>
          <h2>Discount:{data.discountPercentage}</h2>
          <h2>Rating:{data.rating}</h2>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default Six;
