

import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import './card.scss';

function Card({ launch }) {
    const { mission_name, flight_number, mission_id, launch_year, launch_success = false, land_success = false, links } = launch;

    const [isImgLoading, setImgLoading] = useState(true);

    return (
        <div className="launch-card">
            {isImgLoading && <Skeleton height={210}></Skeleton>}

            <img className="launch-card_img" 
                alt="mission logo" src={links.mission_patch_small}
                onLoad={() => setImgLoading(false)}></img>
            <div className="launch-card__details">
                <div className="launch-card__details--item">{mission_name}: {flight_number}</div>
                <div className="launch-card__details--item">
                    Mission Ids: <ul>{mission_id.map(m => <li key={m}>{m}</li>)}</ul>
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

