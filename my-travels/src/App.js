import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travels from "./Travels";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Travels
        destination="Moscou"
        country = "Russie"
        photo = "https://image.ibb.co/f1agnU/moscow_183661_1280.jpg"
        distance = "2836" />
        <Travels
        destination="Perth"
        country = "Australie"
        photo = "https://image.ibb.co/fex0gp/perth_1368337_1280.jpg"
        distance = "14269" />
        <Travels
        destination="Meteora"
        country = "Grèce"
        photo = "https://image.ibb.co/gtOFgp/nature_3279419_1280.jpg"
        distance = "2665" />
      </div>
    );
  }
}

export default App;
