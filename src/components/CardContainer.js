import React from "react";
import PlayerCard from "./PlayerCard";
import "../App.css";

const CardContainer = ({Data,searchTerm}) => {
//   console.log(name,img,statistics);
// console.log(Data);
  return (
    <div className="card-container">
      <PlayerCard players={Data} searchTerm={searchTerm}/>
    </div>
  );
};
// name={name} img={img} statistics={statistics}
export default CardContainer;
