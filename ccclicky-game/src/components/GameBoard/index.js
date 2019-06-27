import React, { Component } from "react";
import "./style.css";
// import tiles from "../../tiles.json";
import Banner from "../Banner";
// import GameTiles from "../GameTiles";

class GameBoard extends Component {
  state = {
    tiles: [
      {
        id: 1,
        src: "../images/01_img.png",
        unclicked: true
      },
      {
        id: 2,
        src: "../images/02_img.png",
        unclicked: true
      },
      {
        id: 3,
        src: "../images/03_img.png",
        unclicked: true
      },
      {
        id: 4,
        src: "../images/04_img.png",
        unclicked: true
      }
    ],
    // "-1" forces the score to start at "zero" on componentDidMount;
    count: -1,
    topScore: -1
  };

  // =============================================
  handleClick() {
    const shuffleArray = tiles => this.state.tiles.sort(() => Math.random() - 0.5);
    shuffleArray(this.state.tiles);
    console.log(this.state.tiles);
    this.setState({
      tiles: this.state.tiles,
      count: this.state.count + 1
    });

    console.log(this.state.count);
  }

  componentDidMount() {
    this.handleClick();
  }

  // ==============================================

  // Couldn't Get this Update to "Unclicked"->False to Work (Yet)============================
  // handleClick = event => {
  //   let tiles = this.state.tiles.slice();
  //   // let clickStatus = tiles.unclicked;
  //   let value = event.target.value;
  //   // const id = event.target.key;

  //   // if (value === true){
  //   //   console.log("This image was already clicked");
  //   // }

  //   this.setState({
  //     tiles: value
  //   });

  //   console.log(tiles);
  //   // this.setState({ tiles });
  //   // console.log(tiles);
  // }
  // Couldn't Get this Update to "Unclicked"->False to Work (Yet)============================

  // Starts the game as soon as the component loads
  

  render() {
    return (
      <div>
        <Banner count={this.state.count} topScore={this.state.topScore} />
        <div className="row justify-content-center">
          {this.state.tiles.map(tile => {
            return (
              <div className="card col-3 m-3">
                <div className="img-container">
                  <img
                    src={tile.src}
                    key={tile.id}
                    alt="..."
                    onClick={() => this.handleClick()}
                    // value={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GameBoard;
