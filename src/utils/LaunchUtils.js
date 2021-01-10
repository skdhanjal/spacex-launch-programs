
const filterParamsMap = {
    year: 'launch_year',
    isLandingSuccess: 'land_success',
    isLaunchSuccess: 'launch_success',
    limit: 'limit'
}

const filters = {
    year: {
        start: 2006,
        end: 2020
    }
}

export const getUrlWithParams = (filters) => {
    return Object.keys(filters)
        .filter(key => filters[key])
        .map(f => `${filterParamsMap[f]}=${filters[f]}`)
        .join('&amp;');
}

export const getAllYears = (selectedYear) => {
    const allYears = [];
    for (let y = filters['year'].start; y <= filters['year'].end; y++) {
        allYears.push({ value: y, isActive: y === selectedYear });
    }
    return allYears
}