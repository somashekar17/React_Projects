//Build a file Uploader component that allows users to upload images
//import React from 'react'

import { useState } from "react";


function Twelve() {
    const [image, setImage] = useState(null);
  
    const handleFileChange = (e) => {
      const selectedImage = e.target.files[0]; 
      setImage(selectedImage);
    };
  
    return (
      <div>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {image && <img src={URL.createObjectURL(image)} alt="uploaded" />}
      </div>
    );
  }
  
  export default Twelve;
