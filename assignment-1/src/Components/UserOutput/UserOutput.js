import React from 'react';

const UserOutput = (props) => {
    const outputStyle = {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: '14px',
    }
    return (
        <div>
            <p>This is the UserOutput component.</p>
            <p>The username for this component is <span style={outputStyle}>{props.username}</span>.</p>
        </div>
    )
}

export default UserOutput;