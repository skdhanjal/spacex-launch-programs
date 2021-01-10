

import React from 'react';
import './card.scss';

function Card({ launch }) {
    const {mission_name, flight_number, mission_id, launch_year, launch_success=false, land_success=false, links} = launch;

    return (
        <div className="launch-card">
            <img className="launch-card_img" src={links.mission_patch_small}></img>
            <div className="launch-card__details">
                <div className="launch-card__details--item">{mission_name}: {flight_number}</div>
                <div className="launch-card__details--item">
                    Mission Ids: 
                    <ul>{mission_id.map(m => <li key={m}>{m}</li>)}</ul>
                </div>
                <div className="launch-card__details--item">
                    Launch year: {launch_year}
                </div>
                <div className="launch-card__details--item">
                    Successful Launch: {`${launch_success}`}
                </div>

                <div className="launch-card__details--item">
                    Successful Landing: {`${land_success}`}
                </div>
            </div>
        </div>
    );
}


export default Card;

