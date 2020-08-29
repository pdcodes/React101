import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  /* State is where all of our data is stored */
  /* This is analogous to a model in MVC land */
  state = {
    persons: [
      { id: 'foo', name: 'Max', age: 28 },
      { id: 'bar', name: 'Manu', age: 29 },
      { id: 'doe', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  /* Methods within the class provide ways of accessing and manipulating state */
  /* This is analogous to ruby's controller and django's view */
  nameChangedHandler = ( event, id ) => {
    // Find the index value where the id of the person we have updated
    // equals the id of the person we want to change
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Create a new person object out of the
    // person object that we want to change
    // so that we can mutate state safely
    const person = {
      ...this.state.persons[personIndex]
    };

    // Set the name of our local person to our updated value
    person.name = event.target.value;

    // Get our full state and prepare it for mutating
    const persons = [...this.state.persons];

    // Update our local copy of the full state
    // with the value that we want to change
    persons[personIndex] = person;

    // Update our global state to include our changes
    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // Create a local copy of our state
    const persons = [...this.state.persons];

    // Remove the specific entity from our local state
    // that we want to take out
    persons.splice(personIndex, 1);

    // Update our global state to include our changes
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    // Create a local copy of our state
    const doesShow = this.state.showPersons;

    //Update our global state to include our changes
    this.setState( { showPersons: !doesShow } );
  }
  
  /* Styling and templating logic go within the render() method */
  /* This is analogous to ruby's view and django's templates */
  render () {

    // Here's how we style our button
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    // If showPersons is true, then output our block of Person components
    if ( this.state.showPersons ) {
      persons = (
        // Map our state opject into a persons array
        // so that we can simply output a new <Person/> component
        // with our parameters
        // This is the common pattern of outputting lists in React
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    /* Actual UI code goes within the return statement of the component */
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
