import React, { Component } from "react";
// import "./style.css";

class Banner extends Component {
  render() {
    return (
      <ul className="list-group list-group-horizontal my-2">
        <li className="list-group-item flex-fill">Score: 0 </li>
        <li className="list-group-item flex-fill">
          "You Picked Wrong, Sucka!"
        </li>
        <li className="list-group-item flex-fill">High Score: 5</li>
      </ul>
    );
  }
}

export default Banner;
