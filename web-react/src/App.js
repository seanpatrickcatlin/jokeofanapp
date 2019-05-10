import React from 'react';
import logo from './logo.svg';
import JokeBox from './jokebox'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <JokeBox />   
      </header>
    </div>
  );
}

export default App;
