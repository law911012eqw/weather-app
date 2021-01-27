import { LOCATION_API, WEATHER_API } from './private_keys.js';

const fetchData = (() => {
    const part = 'minutely';
    let lat = 1;
    let lon = 1;
    let searchArea;
    let areaName
    return {
        setCoordinates(nLat,nLon) {
            lat = nLat;
            lon = nLon;
        },
        setSearchArea(v) { searchArea = v },
        setAreaName(v) { areaName = v },
        getAreaName() {return areaName; },
        getWeatherURL() {
            const WEATHER_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${WEATHER_API}`;
            return WEATHER_URL; 
        },
        getLocationURL() { 
            const LOCATION_URL = `https://us1.locationiq.com/v1/search.php?key=${LOCATION_API}&q=${searchArea}&format=json`;
            return LOCATION_URL; 
        }
    }
})();

export default fetchData;
