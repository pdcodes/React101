import React, { Component } from 'react';
import './App.css';
import Validation from './Components/Validation';
import Character from './Components/Character';

class App extends Component {
  state = {
    inputText: '',
  }

  inputHandler = (event) => {
    const myInput = event.target.value;
    this.setState({ inputText: myInput });
  }

  deleteCharHandler = (index) => {
    const text = this.state.inputText.split('');
    text.splice( index, 1 );
    const updatedText = text.join('');
    this.setState({ inputText: updatedText })
  }

  render () {

    let characterBlock = <p>There is no text to display!</p>;

    if ( this.state.inputText.length > 0 ) {
      const characterArray = this.state.inputText.split('');
      characterBlock = (
        <div>
          {characterArray.map((character, index) => {
            return <Character letter={character} key={index} clicked={() => this.deleteCharHandler(index)} />
          })}
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
            <input type="text" value={this.state.inputText} onChange={this.inputHandler} />
          </p>
          <p>There are {this.state.inputText.length} characters in the input field!</p>
          <Validation textLength={this.state.inputText.length} textInput={this.state.inputText} />
          {characterBlock}
        </header>
      </div>
    );
  }
}

export default App;
