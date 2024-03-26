import React, { useState } from "react";
// import { data } from "../helper/data";
import "../App.css";

const PlayerCard = ({ players, searchTerm }) => {
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  ); //!Değişiklikleri anlık olarak almak için filter kullanıyoruz.
  const [showStats, setShowStats] = useState(Array(players.length).fill(false));
  // Oyuncu kartına tıklama fonksiyonu
  const handlePlayerClick = (index) => {
    // Tıklanan oyuncunun index'ine göre gösterim durumunu güncelle.
    setShowStats(showStats.map((item, idx) => (idx === index ? !item : item)));
  };
  return (
    <div className="player-card">
      {filteredPlayers.map((item, index) => (
        <div
          key={item.name}
          className="card"
          onClick={() => handlePlayerClick(index)}
        >
          {showStats[index] ? (
            <div>
              {/* İstatistikler gösteriliyor */}
              <ul className="statisticsList">
                {item.statistics.map((stat, idx) => (
                  <li key={idx}>{stat}</li>
                ))}
              </ul>
            </div>
          ) : (
            // Resim gösteriliyor
            <div className="imageDiv">
              <img src={item.img} alt={item.name} className="images" />
            </div>
          )}
          <div className="playerNameDiv">
            <p className="playerNameText">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PlayerCard;
