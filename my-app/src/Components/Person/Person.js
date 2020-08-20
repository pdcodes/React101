import React from 'react';

// This is a state-less components because it has no internal logic or means of managing state
// This is also referred to as a presentational component
// You generally want to use as many of these as you can b/c it makes your app easier to maintain and manage
const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person