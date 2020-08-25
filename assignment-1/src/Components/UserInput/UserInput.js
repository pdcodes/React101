import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    const styles = {
        border: '1px solid #eee',
        textAlign: 'center',
        width: '20vw',
        fontFamily: 'sans-serif',
    }
    return (
        <div className="InputDiv">
            <p>This is where you input a username...</p>
            <input 
                type="text"
                style={styles}
                onChange={props.onChange} 
                value={props.currentUsername}
            />
        </div>
    )
}

export default UserInput;