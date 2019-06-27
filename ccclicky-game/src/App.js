import React, { Component } from 'react';
import Title from "./components/Title";
import Banner from "./components/Banner";
import GameBoard from "./components/GameBoard";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {

  render(){
    return(
      <div className="container text-center bg-light">
        <Title />
        <Banner />
        <GameBoard />
        <Footer />
      </div>
    )
  }
  
}

export default App;
