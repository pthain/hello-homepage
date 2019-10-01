import React from 'react';
import logo from './logo.svg';
import './App.css';

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
          onClick={() => this.handleClick(0)}>Home
        </p>
        <p id='resume' onClick={() => this.handleClick(1)}>Resume</p>
        <p id='portfolio' onClick={() => this.handleClick(2)}>Portfolio</p>
      </div>
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
    return (
      <div>
        <h1>HOME!</h1>
      </div>
    )
  }
  if (i === 1) {
    return (
      <div>
        <h1>RESUME!</h1>
      </div>
    )
  }
  if (i === 2) {
    return (
      <div>
        <h1>PORTFOLIO!</h1>
      </div>
    )
  }
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
