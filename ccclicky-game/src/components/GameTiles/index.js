import React from "react";
import "./style.css";

function GameTiles(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.src} alt="..." />
      </div>
    </div>
  );
}

export default GameTiles;