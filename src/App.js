import React from 'react';
import profile from './resources/thumb-profile.jpg';
//import logo from './logo.svg'
import './css/style.css';

import file from "./resources/Resume_pthain.pdf"
import PDFObject from 'pdfobject'

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
    <div id="main-flexbox-container">
      {/*Header*/}
      <header id="main-header">
        <h1>Welcome.</h1>
      </header>

      {/*Dynamic Content*/}
      <div id="main-content-display">{setDisplayDiv(this.state.choice)}</div>

      {/*Navbar*/}
      <div id="main-footer" class="navbar-dark">
        <ul>
          <li id='home'onClick={() => this.handleClick(0)}>
            Home
          </li>
          <li id='resume' onClick={() => this.handleClick(1)}>
            Resume
          </li>
          <li id='portfolio' onClick={() => this.handleClick(2)}>
            Portfolio
          </li>
        </ul>
      </div>
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
    <div class="wrapper">
      {/*<img src={profile} class="profile-image wrapper-element" alt="profile"/>*/}
      <div class="wrapper-element">
        <div class="profile-image">
          <img src={profile} class="profile-image" alt="profile"/>
        </div>
      </div>
      <div class="wrapper-element">
        <div class="bio-text">
          <p> My name is Phillip Thain. </p>
          <br></br>
          <p>I am a recent grad from Purdue University with a degree in Computer Science.</p>
          <br></br>
          <p>The rest of my bio will go here!</p>
        </div>
      </div>
    </div>
  )
}
function createResumeContent() {
  return (
    /* Any content displayed in the RESUME tab goes here */
    <div id="resume-wrapper" class="wrapper-pdf">
        {/*PDFObject.embed(file, "#resume-wrapper")*/}
        <embed src={file}></embed>
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
