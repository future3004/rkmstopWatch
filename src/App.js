import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Timer start={Date.now()}/>

        <Footer />

      </div>
    );
  }
}

export default App;
