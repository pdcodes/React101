import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>This is the UserOutput component.</p>
            <p>The username for this component is {props.username}.</p>
        </div>
    )
}

export default UserOutput;