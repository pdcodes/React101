import React from 'react';

const character = ( props ) => {
    const characterStyles = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid teal'
    }

    return (
        <div style={characterStyles}>
            <p>{props.letter}</p>
        </div>
    )
}

export default character;