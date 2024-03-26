import React from "react";
import nbaImage from "../assets/nba-logo.png";

const Header = ({ name,searchTerm, setSearchTerm }) => {
   

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value); // Input değerini güncelle
//   };
//   console.log(searchTerm);
  return (
    <div className="header">
      <div className="nba-image">
        <img src={nbaImage} alt="" />
      </div>
      <div className="searhArea">
        <h1>NBA Legends</h1>
        <input
          type="search"
          placeholder="Search player..."
          id="input"
          value={searchTerm} // Input değerini state'ten al
          onInput={(event) => setSearchTerm(event.target.value)} // Input değişikliği için dinleyici
        />
      </div>
    </div>
  );
};

export default Header;
