import React from 'react';
import logo from './logo.svg';
import './App.css';

import file from "./resources/Resume_pthain.pdf"
import PDFViewer from 'pdf-viewer-reactjs'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      choice: 0
    }
  }

  handleClick(i) {
    this.setState({
      choice: i
    })
  }

  //Outline for the homepage
render() {
  return (
    <div>
      <h1>Welcome.</h1>
      <img src={logo} className="App-logo" alt="logo"/>
      <div id='navBar'>
        <p
          id='home'
          onClick={() => this.handleClick(0)}
        >Home</p>
        <p
          id='resume'
          onClick={() => this.handleClick(1)}
        >Resume</p>
        <p
          id='portfolio'
          onClick={() => this.handleClick(2)}
        >Portfolio</p>
      </div>
      <hr></hr>
      <div id='display'>{setDisplayDiv(this.state.choice)}</div>
    </div>
  )

/*function setDisplayDiv() {
  return (
    //Date.now().toLocaleString()
    //Return a REACT ELEMENT
    <div
      id="htmlContent"
      innerHtml='<object type="text/html" data="../public/html/home.html" ></object>'
    >
    </div>
  )
}*/
function setDisplayDiv(i) {
  if (i === 0) {
    return createHomeContent()
  }
  if (i === 1) {
    return createResumeContent()
  }
  if (i === 2) {
    return createPortfolioContent()
  }
}

function createHomeContent() {
  return (
    /* Any content displayed in the HOME tab goes here */
    <div>
      <p> This tab will contain information about me. </p>
    </div>
  )
}
function createResumeContent() {
  return (
    /* Any content displayed in the RESUME tab goes here */
    <div>
      <p>This tab will contain my resume.</p>
      <PDFViewer document={{
        url: file
      }}
      />
    </div>
  )
}
function createPortfolioContent() {
  return (
    /* Any content displayed in the Portfolio tab goes here */
    <div>
      <p>
        This tab will contain a list of projects, with brief descriptions and
         download instructions.
      </p>
    </div>
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
}
export default App;
