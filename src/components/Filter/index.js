

import React from 'react';
import Button from '../Button';

import './filter.scss';

function Filter({ type, value, active, onChange }) {

    const handleOnClick = ({value, isActive}) => {
        onChange({type, value, isActive});
    }

    return (
        <div className="launch-filter">
            <Button text={value} active = {active} onClick={handleOnClick}></Button>
        </div>
    );
}

export default Filter;

