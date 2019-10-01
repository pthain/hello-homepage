import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //Outline for the homepage

  return (
    <div>
      <h1>Welcome.</h1>
      <img src={logo} className="App-logo" alt="logo"/>
      <div id='navBar'>
        <p id='home'>Home</p>
        <p id='resume'>Resume</p>
        <p id='portfolio'>Portfolio</p>
      </div>
      <div id='display'>{setDisplayDiv()}</div>
    </div>
  )

function setDisplayDiv() {
  return (
    Date.now().toLocaleString()
  )
}
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;