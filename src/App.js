import React from 'react';
import profile from './resources/thumb-profile.jpg';
//import logo from './logo.svg'
import './css/style.css';

import file from "./resources/Resume_pthain.pdf"
import {Document, Page, pdfjs} from 'react-pdf'
//pdfjs.workerSrc  = './pdf.worker.js'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pdfwidth: null,
      choice:0
    }
  }
  /** Helper Functions **/
  //Click on one the navbar buttons
  handleClick(i) {
    this.setState({
      choice: i
    })
  }

  /** Main React element returned to index.html **/
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

    function setDisplayDiv(i) {
      if (i === 0) {
        return createHomeContent()
      }
      if (i === 1) {
        return createResumeContent(this)
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
        <div id="resumeContainer" class="wrapper-pdf">
            {/*PDFObject.embed(file, "#resume-wrapper")*/}
            <PdfComponent wrapperDivWidth={1000}/>
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
  }
}

class PdfComponent extends React.Component {
  render() {
    return (
      <div>
        <Document file={file}>
          <Page class="resume-pdf" width={this.props.wrapperDivWidth} height={this.props.wrapperDivHeight} pageNumber={1}></Page>
        </Document>
      </div>
    )
  }
}

export default App;
