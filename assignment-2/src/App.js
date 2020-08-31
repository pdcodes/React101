import React, { Component } from 'react';
import './App.css';
import Validation from './Components/Validation';
import Character from './Components/Character';

class App extends Component {
  state = {
    inputText: [],
  }

  inputCounter = (event) => {
    const myInput = event.target.value;
    // const myInputLength = myInput.length;

    this.setState({ inputLength: myInputLength })
  }

  inputUpdater = (event) => {
    const myInputText = event.target.value;

    this.setState({ inputText: myInputText })
  }

  render () {

    let characterBlock = <p>There is no text to display!</p>;

    if ( this.state.inputLength > 0 ) {
      const characters = this.state.inputText;
      let characterArray = characters.split('');
      characterBlock = (
        <div>
          <p>{characterArray}</p>
        </div>
      );
    }

    const spanStyle = {
      display: 'block',
      textAlign: 'left',
      marginTop: '20px'
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>
            <code>This is assignment #2!</code>
            <span style={spanStyle}>Here is my input field:</span>
            <input type="text" onChange={this.inputCounter} />
          </p>
          <p>There are {this.state.inputLength} characters in the input field!</p>
          <Validation text={this.state.inputText} />
          {characterBlock}
        </header>
      </div>
    );
  }
}

export default App;
