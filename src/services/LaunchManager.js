
import { getUrlWithParams } from '../utils/LaunchUtils';

export const getLauchesList = async (launchFilters) => {
    return fetch(`https://api.spacexdata.com/v3/launches?${getUrlWithParams({ ...launchFilters, limit: 100 })}` )
        .then(res => res.json())
}