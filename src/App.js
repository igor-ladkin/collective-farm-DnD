import React, { Component } from 'react';
import react from './icons/react.svg';
import travis from './icons/travis.svg';
import github from './icons/github.svg';
import phoenix from './icons/phoenix.svg';
import rails from './icons/rails.svg';
import ember from './icons/ember.svg';
import docker from './icons/docker.svg';
import './App.css';
import Logo from './components/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-draggable-board">
          <Logo logo={react} initialPosition={{ top: 100, left: 200 }} />
          <Logo logo={travis} initialPosition={{ top: 150, left: 700 }} />
          <Logo logo={github} initialPosition={{ top: 250, left: 450 }} />
          <Logo logo={phoenix} initialPosition={{ top: 350, left: 250 }} />
          <Logo logo={rails} initialPosition={{ top: 380, left: 850 }} />
          <Logo logo={ember} initialPosition={{ top: 60, left: 950 }} />
          <Logo logo={docker} initialPosition={{ top: 50, left: 550 }} />
        </div>
      </div>
    );
  }
}

export default App;
