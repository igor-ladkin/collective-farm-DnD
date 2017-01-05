import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-draggable-board">
          <Logo logo={logo} initialPosition={{ top: 100, left: 200 }} />
        </div>
      </div>
    );
  }
}

export default App;
