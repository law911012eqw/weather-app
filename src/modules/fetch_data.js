import { LOCATION_API, WEATHER_API } from './server-route.js';

// mainly for fetching API key
// file for getting and setting [insert_string] directory name to complete URL
const fetchData = (() => {
	const part = 'minutely';
	let lat;
	let lon;
	let searchArea;
	let areaName;
	return {
		setCoordinates(nLat, nLon) {
			lat = nLat;
			lon = nLon;
		},
		setSearchArea(v) { searchArea = v; },
		setAreaName(v) { areaName = v; },
		getLat() { return lat; },
		getLon() { return lon; },
		getAreaName() { return areaName; },
		getWeatherURL() {
			const WEATHER_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${WEATHER_API}`;
			return WEATHER_URL;
		},
		getLocationURL() {
			const LOCATION_URL = `https://us1.locationiq.com/v1/search.php?key=${LOCATION_API}&q=${searchArea}&format=json`;
			return LOCATION_URL;
		},
	};
})();

export default fetchData;
