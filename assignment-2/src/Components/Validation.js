import React from 'react';

const validation = ( props ) => {
    const textLength = props.length;
    const lengthThreshold = 8;
    let returnedText = textLength <= lengthThreshold ? 'Text is too short!' : 'Text is long enough!';
    const returnedTextStyles = {
        color: 'white',
        fontSize: '40px'
    }

    return (
        <div>
            <p>The inputted text is <em>{props.input}</em>.</p>
            <p style={returnedTextStyles}>{returnedText}</p>
        </div>
    )
};

export default validation;