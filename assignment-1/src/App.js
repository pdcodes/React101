import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'John'
  }

  handleStateChange = (event) => {
    this.setState({username: event.target.value})
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <p>Here is my work for assignment #1!</p>
          <UserInput 
            onChange={this.handleStateChange}
            currentUsername={this.state.username} />
          <UserOutput username={this.state.username} />
          <UserOutput username={this.state.username} />
          <UserOutput username={"Peter"} />
        </header>
      </div>
    );
  }
}

export default App;
