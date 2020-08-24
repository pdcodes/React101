import React, { Component, /* useState */ } from 'react';
import './App.css';
import Person from './Components/Person/Person';
import ImmutablePerson from './Components/ImmutablePerson/ImmutablePerson';

/*
There are a few ways to implement components:
- As functional components with static values
- As functional components with dynamic values managed by state and hooks
- As class-based components
*/


// This is the newer way to implement component - as a functional component
// This implementation does not have the ability to manage state
/*
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
        <button>Switch Name</button>
        <Person name="Peter" age="30">
          My hobbies include soccer, running, and yoga.
        </Person>
        <Person name="Paula" age="27"></Person>
      </header>
    </div>
  );
}
*/

// This is a functional component with state managed via hooks
// This requires an import of 'useState'
/*
const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Peter', age: 30 },
    ]
  });

const switchNameHandler = () => {
  setPersonsState( {
    persons: [
      { name: 'Mitch', age: 45 },
    ]
  })
}
  return (
    <div className="App">
    <header className="App-header">
      <h1>Hi, I'm a React App that uses hooks to manage state.</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
    </header>
    </div>
  )
}
*/

// This is the original way to implement components - as classes
// This requires an import of 'Component'
// What's included below is referred to as a container, state-ful, or smart component
// You generally want less of these because it's challenging to keep track of state across an app
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Peter', age: 30 },
        { name: 'Paula', age: 27 }
      ]
    }
  }

  switchNameHandler = () => {
    this.setState( {
      persons: [
        { name: 'Mitch', age: 45 },
        { name: 'Niles', age: 7 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: event.target.value, age: 30 },
        { name: 'Natalie', age: 7 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi, I'm a React App with a class-based component.</h1>
          <p>This is really working!</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            // You can path methods as props
            // This allows you to pass methods between components
            click={this.switchNameHandler}
            changed={this.nameChangedHandler}
          />
          <ImmutablePerson 
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
        </header>
      </div>
    )
  }
}

export default App;
