

import React from 'react';
import './Button.scss';

function Button({ text, active, onClick }) {

    const handleOnClick = () => {
        onClick({isActive: !active, value: text});
    }

    return (
        <div>
            <button className={`spx-button ${active ? 'spx-button--active': ''}`} onClick={handleOnClick}>{text}</button>
        </div>
    );
}

export default Button;

