import React from 'react';

const character = ( props ) => {
    const characterStyles = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid teal',
        color: 'white'
    }

    return (
        <div style={characterStyles} onClick={props.clicked}>
            <p>{props.letter}</p>
        </div>
    )
}

export default character;