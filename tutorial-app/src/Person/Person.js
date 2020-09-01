import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = ( props ) => {
    const style = {
        // Adding our media queries with Radium
        // which will require that we wrap our app
        // in the <StyleRoot> component
        '@media(min-width: 500px)': {
            width: '400px'
        }
    }
    return (
        <div className="Person" onClick={props.click} style={style}>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <button onClick={props.click}>Remove me!</button>
        </div>
    )
};

// Exporting person as a higher-order component by passing it to Radium
export default Radium(person);