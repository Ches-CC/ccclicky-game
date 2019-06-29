import React from "react";
import "./style.css";

function GameTiles(props) {
  return (
    <div className="row justify-content-center">

      {props.tileArray.map(tile => {
        return(
        <div className="card col-3 m-3">
          <div className="img-container">
            <img
              src={tile.src}
              alt="..."
              key={tile.id}
              onClick={() => props.handleClick(props.id)}
            />
          </div>
        </div>
      )})}
    </div>
  );
}

export default GameTiles;
