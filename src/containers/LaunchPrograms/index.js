

import React, { useState, useEffect } from 'react';
import Loader from "react-loader-spinner";
import LaunchFilters from '../../components/LaunchFilters';
import Card from '../../components/Card';
import { getLauchesList } from '../../services/LaunchManager';

import './launchPrograms.scss';

function LaunchPrograms() {

    const [launchs, setLaunches] = useState([]);
    const [launchFilters, setLaunchFilters] = useState({ year: 2006, isLandingSuccess: false, isLaunchSuccess: false })
    const [isLoading, setIsLoading] = useState(true);

    const { year, isLandingSuccess, isLaunchSuccess } = launchFilters;

    useEffect(() => {
        async function fetchLaunches() {
            const launches = await getLauchesList(launchFilters);
            setLaunches(launches);
            setIsLoading(false);
        }
        fetchLaunches();
    }, [launchFilters]);

    const onFilterChange = ({ type, value, isActive }) => {
        if (type === 'year') {
            setLaunchFilters({ ...launchFilters, year: isActive ? value : undefined });
        } else if (type === 'launch') {
            setLaunchFilters({ ...launchFilters, isLaunchSuccess: isActive && value === 'true' });
        } else {
            setLaunchFilters({ ...launchFilters, isLandingSuccess: isActive && value === 'true' });
        }
        setIsLoading(true);
    }

    return (
        <div className="launch-programs">

            <LaunchFilters year={year} isLandingSuccess={isLandingSuccess} isLaunchSuccess={isLaunchSuccess} onChange={onFilterChange}></LaunchFilters>

            { isLoading && <div className="launch-programs__loader">
                <Loader type="TailSpin" color="#00BFFF" height={100} width={100}
                /></div>}

            { !isLoading && <div className="launch-programs__cards">
                {launchs.map((l, index) => {
                    return <Card key={index} launch={l}></Card>
                })}
            </div>
            }
            { !isLoading && launchs.length ===0 && <h2>No Launch data found for these filters.</h2>}
        </div>
    );
}

export default LaunchPrograms;

