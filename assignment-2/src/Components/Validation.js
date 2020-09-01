import React from 'react';

const validation = ( props ) => {
    const textLength = props.textLength;
    const lengthThreshold = 8;
    let enteredText = textLength > 0 ? props.textInput : 'empty';
    let returnedText = textLength <= lengthThreshold ? 'Text is too short!' : 'Text is long enough!';
    const returnedTextStyles = {
        color: 'white',
        fontSize: '40px'
    }

    return (
        <div>
            <p>The entered text is <em>{enteredText}</em>.</p>
            <p style={returnedTextStyles}>{returnedText}</p>
        </div>
    )
};

export default validation;