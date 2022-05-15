import React, { useState } from "react";
import logoImage from "../component/youtubelogotip.png";

function Search({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleCHange = (event) => setSearchTerm(event.target.value);

  const onkeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  };
  return (
    <>
      <div className="header">
        <a href="/" className="logo">
          <img src={logoImage} alt="logo image" />
        </a>
        <div className="header_input">
        <input 
        type="text"
        fullWidth
        placeholder="search..."
        value={searchTerm}
        onChange={handleCHange}
        onKeyPress={onkeyPress}
         />
         <div className="search" onClick={()=> onSubmit(searchTerm) }>
         <i className="bi bi-search"></i>
         </div>
        </div>
    
         <div className="icons">
         <i className="bi bi-camera-video"></i>
         <i className="bi bi-grid-3x3-gap"></i>
         <i className="bi bi-bell"></i>
             <a href="/"className="profile">
                 <h3>supper youtube</h3>
             </a>
             
         </div>
         <i className="bi bi-filter-right"></i>
      </div>
    </>
  );
}

export default Search;