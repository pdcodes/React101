import React from 'react';
import './App.css';
import Person from './Components/Person/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Congrats! You just launched a react app! Woo!
        </p>
        <Person name="Peter" age="30">
          My hobbies include soccer, running, and yoga.
        </Person>
        <Person name="Paula" age="27"></Person>
      </header>
    </div>
  );

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'));
}

export default App;
