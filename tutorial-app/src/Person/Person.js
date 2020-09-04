import React from 'react';
// Importing styled-components library
import styled from 'styled-components';
import './Person.css';

/* 
ES6 has a new way of formatting functions known as tagged templates: function``
This is the convention that styled components uses
to format and compile styles. The styled.div`` syntax
below returns a react component with the HTML tag
that is specified as the method of the styled object.
We're then able to add in whatever styles we want!
*/

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    
    '@media(min-width: 500px)': {
        width: '400px'
    }`;

const person = ( props ) => {
    return (
        // We created a new component for StyledDiv here just for syntactic clarity
        <StyledDiv className="Person" onClick={props.click}>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <button onClick={props.click}>Remove me!</button>
        </StyledDiv>
    )
};

// Exporting person as a higher-order component by passing it to Radium
export default person;