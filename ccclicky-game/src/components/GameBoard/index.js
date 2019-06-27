import React, { Component } from "react";
import "./style.css";
import tiles from "../../tiles.json";
// import GameTiles from "../GameTiles";

class GameBoard extends Component {
  state = {
    tiles
  };

  shuffleTiles = () => {
    console.log(this.state.tiles);
  };

  render() {
    return (
      <div className="row justify-content-center">
        {this.state.tiles.map((tile, i) => {
          return <div className="card col-3 m-3">
            <div className="img-container">
              <img src={tile.src} key={i} alt="..." />
            </div>
          </div>
        })}
      </div>
    );
  }
}

export default GameBoard;
