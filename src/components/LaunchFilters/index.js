import React, { useState } from 'react';
import Filter from '../Filter';
import { getAllYears } from '../../utils/LaunchUtils';

import './launchFilters.scss';

function LaunchFilters({ year, isLaunchSuccess, isLandingSuccess, onChange }) {

    const allYears = getAllYears(year);

    const onFilterChange = ({ type, value, isActive }) => {
        onChange({ type, value, isActive });
    }

    return (
        <div className="launch-filters">
            <div className="launch-filters--text">Launch year</div>
            <div className="launch-filters__year">
                {allYears.map(({ value, isActive }) => {
                    return <Filter key={value} type="year" value={value} active={isActive} onChange={onFilterChange}></Filter>
                })}
            </div>

            <div className="launch-filters--text">Successful Launch</div>
            <div className="launch-filters__launch">
                <Filter type="launch" value="true" active={isLaunchSuccess} onChange={onFilterChange}></Filter>
                <Filter type="launch" value="false" active={!isLaunchSuccess} onChange={onFilterChange}></Filter>
            </div>

            <div className="launch-filters--text">Successful Landing</div>
            <div className="launch-filters__landing">
                <Filter type="landing" value="true" active={isLandingSuccess} onChange={onFilterChange}></Filter>
                <Filter type="landing" value="false" active={!isLandingSuccess} onChange={onFilterChange}></Filter>
            </div>
        </div>
    );
}


export default LaunchFilters;