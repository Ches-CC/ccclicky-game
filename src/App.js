import React, { Component } from 'react';
import Title from "./components/Title";
import GameBoard from "./components/GameBoard";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {

  render(){
    return(
      <div className="container text-center bg-light">
        <Title />
        <GameBoard />
        <Footer />
      </div>
    )
  }
  
}

export default App;
