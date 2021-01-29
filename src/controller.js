// modules
import fetchData from './modules/fetch_data.js';
import DOM from './modules/elements.js';
import manage from './modules/helpers.js';
import {
	checkTempUnit,
	toggleTemp,
	convertTemp,
	windSpeedToMPH,
	windDegToDir,
} from './modules/units.js';
import {
	convertTZ,
	formatHourMin,
	formatHourOnly,
	formatFullDate,
	formatShortDate,
	getLocalHours,
} from './modules/time.js';
import { getAreaFromCoordinates } from './modules/current_location.js';
import { getAlert, toggleDisplay } from './modules/alert.js';
import bgManipulation from './modules/bg_change.js';

// styles
import './styles/reset.css';
import './styles/style.css';
import './styles/alert.css';
import './styles/media_queries.css';

// images
import iconHumidity from './img/humidity.png';
import iconFeelsLike from './img/feels_like.svg';
import iconWindSpd from './img/wind-solid.svg';
import iconCompass from './img/compass-regular.svg';

// the only global variable
let weatherData; // used later to assing data on this var

// display default
window.onload = () => {
	defaultLocation();
};

// ask the user for a permission to collect the former's coordinates
DOM.userLocation.onclick = () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getCoordinatesFromUser);
	} else {
		console.log('Geolocation is not supported by this browser');
	}
};

// get the user's current location
async function getCoordinatesFromUser(pos) {
	DOM.modal.style.display = 'block';
	const lat = pos.coords.latitude;
	const lon = pos.coords.longitude;
	const data = await fetchCoordinatesToGetArea(lat, lon);
	assignUserLocation(data);
}

// using the coordinates to get the proper area
function fetchCoordinatesToGetArea(lat, lon) {
	fetchData.setCoordinates(lat, lon);
	return getAreaFromCoordinates({ lat, lon });
}
// assign the user's location as current
async function assignUserLocation(data) {
	let areaName = locationNameByAPI(data);
	fetchData.setAreaName(areaName);
	try {
		await fetchWeatherData(fetchData.getWeatherURL());
	} catch (e) {
		console.log(`Error: ${e}`);
	}
}
// disallow any spaces
function hasSpaces(str) {
	if (str.indexOf(' ') !== -1) {
		return false;
	}
	return true;
}

// the output of location name in accordance to API
function locationNameByAPI(data) {
	let areaName;
	// make sure city does not have any space and state is not an object
	if ((data.city && hasSpaces(data.city)) && (data.hasOwnProperty('state') || typeof data.state !== 'object')) {
		areaName = `${data.city}, ${data.state}`;
		if ((typeof data.state === 'object' && data.prov)) {
			areaName = `${data.city}, ${data.prov}`;
		} // the rest are alternatives if some data property doesn't exist or an object
	} else if (data.staddress && data.state) {
		areaName = `${data.staddress}, ${data.state}`;
	} else if (data.prov) {
		`${data.staddress}, ${data.prov}`
	} else {
		areaName = data.region;
	}
	return areaName;
}
// use default location if the user disallow the humble permission
async function defaultLocation() {
	const lat = 90;
	const lon = 0;
	fetchData.setCoordinates(lat, lon);
	fetchData.setAreaName('North Pole');
	const data = await fetchData.getWeatherURL();
	try {
		await fetchWeatherData(data);
	} catch (e) {
		console.log(`Error: ${e}`);
	}
}

// submit the form to get the input of coordinates and overwrite to the respective
// variables, appended within the weather url.
DOM.form.onsubmit = async (e) => {
	e.preventDefault();
	DOM.modal.style.display = 'block';
	fetchData.setSearchArea(DOM.locationInput());
	fetchData.setAreaName(DOM.strInput());
	try {
		await getCoordinates(fetchData.getLocationURL());
	}
	catch (error) {
		console.log(error);
	}
};

DOM.alertClose.addEventListener('click', toggleDisplay);
DOM.alertBtn.addEventListener('click', toggleDisplay);
// get the coordinates
async function getCoordinates(data) {
	const response = await fetch(data, { mode: 'cors' });
	const locationData = await response.json();
	fetchData.setCoordinates(locationData[0].lat, locationData[0].lon);
	const dataForAreaName = await fetchCoordinatesToGetArea(fetchData.getLat(), fetchData.getLon());
	const areaNameByAPI = locationNameByAPI(dataForAreaName);
	if (areaNameByAPI === undefined) {
		fetchData.setAreaName(DOM.strInput());
	} else {
		fetchData.setAreaName(areaNameByAPI);
	}
	try {
		await fetchWeatherData(fetchData.getWeatherURL());
	}
	catch (e) {
		console.log(`Error: ${e}`);
	}
}

// fetch the data and display it
async function fetchWeatherData(data) {
	const response = await fetch(data, { mode: 'cors' });
	weatherData = await response.json();
	displayInfo();
	if (DOM.modal.style.display === 'block') {
		DOM.modal.style.display = 'none';
	}
	getAlert(weatherData); // get alert data
}

const getHourlyData = (parent) => {
	for (let i = 0; i < 9; i++) {
		displayHourlyOutput(i, parent);
	}
};

// display hourly contents
function displayHourlyOutput(i, parent) {
	// temperature data from current object
	let { temp } = weatherData.hourly[(i + 1) + i];
	let feelsLike = weatherData.hourly[(i + 1) + i].feels_like;

	const icon = weatherData.hourly[(i + 1) + i].weather[0].icon;
	const humidity = weatherData.hourly[(i + 1) + i].humidity + '%';
	const { timezone } = weatherData;
	const date = convertTZ(new Date(), timezone);

	temp = convertTemp(temp);
	feelsLike = convertTemp(feelsLike);

	// DOM instances
	const hourlyMain = manage.crtElement('', `hrly-main${i + 1}`, 'hrly-contents', 'div');
	const hourlyTemp = manage.crtElement(`${temp}`, `hrly-temp${i + 1}`, 'hrly-temp', 'p');

	const hourlyIcon = manage.crtImg(getWeatherIcon(icon), `hrly-icon${i + 1}`, 'hrly-icons');
	const hourlyTime = manage.crtElement(formatHourOnly(date, (i + 1) + i), `hrly-time${i + 1}`, 'hrly-time', 'p');

	const hourlyLower = manage.crtElement('', 'hrly-lower', 'hrly-lower', 'div');
	const hourlyHumidityWrapper = manage.crtElement('', 'hrly-humidity-wrapper', 'hrly-container', 'div');
	const hourlyHumidity = manage.crtElement(`${humidity} `, `hrly-humidity${i + 1}`, 'hrly-container', 'p');
	const hourlyFeelsWrapper = manage.crtElement('', 'hrly-feels-wrapper', 'hrly-container', 'div');
	const hourlyFeels = manage.crtElement(` ${feelsLike}`, `hrly-feels${i + 1}`, 'hrly-container', 'p');

	// used icons from https://icons8.com/icons/set/humidity
	const iHumidity = manage.crtImg(iconHumidity, '', 'img-humidity');
	const iFeelsLike = manage.crtImg(iconFeelsLike, '', 'img-feels');

	// append los elementos de familia
	parent.append(hourlyMain);
	hourlyFeelsWrapper.append(iFeelsLike, hourlyFeels);
	hourlyHumidityWrapper.append(hourlyHumidity, iHumidity);
	hourlyLower.append(hourlyFeelsWrapper, hourlyHumidityWrapper);
	hourlyMain.append(hourlyTime, hourlyTemp, hourlyIcon, hourlyLower);
}

const getDailyData = (parent) => {
	for (let i = 0; i < 6; i++) {
		displayDailyOutput(i, parent);
	}
};

function displayDailyOutput(i, parent) {
	// DOM instances
	// temperature data from current object
	let temp = weatherData.daily[i + 1].temp.night;
	let feelsLike = weatherData.daily[i + 1].feels_like.night;
	temp = convertTemp(temp);
	feelsLike = convertTemp(feelsLike);

	// get data with object destructuring
	const { icon } = weatherData.daily[i + 1].weather[0];
	const humidity = `${weatherData.daily[i + 1].humidity}%`;
	const { timezone } = weatherData;

	let date = new Date(); // get todays date
	date.setDate(date.getDate() + (i + 1)); // accumulate date by one
	const localDate = convertTZ(date, timezone); // get date based n timezone

	// get wind speed and degree
	const speed = `${windSpeedToMPH(weatherData.daily[i + 1].wind_speed)} mph `;
	const deg = `${windDegToDir(weatherData.daily[i + 1].wind_deg)}`;

	const dailyWrapper = manage.crtElement('', `daily-wrapper${i + 1}`, 'daily-wrappers', 'div');
	const dailyTemp = manage.crtElement(`${temp}`, `daily-temp${i + 1}`, 'daily-temps', 'p');

	const dailyFeels = manage.crtElement(`Feels like: ${feelsLike}`, `daily-feels${i + 1}`, 'daily-feels', 'p');
	const dailyIcon = manage.crtImg(getWeatherIcon(icon), `daily-icon${i + 1}`, 'daily-icons');
	const dailyDate = manage.crtElement(formatShortDate(localDate), `daily-date${i + 1}`, 'daily-dates', 'p');

	const dailyLower = manage.crtElement('', '', 'daily-lower', 'div');
	const dailyLowerLeft = manage.crtElement('', 'daily-lower-left', 'daily-container', 'div');
	const dailyLowerRight = manage.crtElement('', 'daily-lower-right', 'daily-container', 'div');

	const dailyHumidityWrapper = manage.crtElement('', '', 'daily-container', 'div');
	const dailyHumidity = manage.crtElement(`${humidity}`, `daily-humidity${i + 1}`, 'daily-contents', 'p');
	const iHumidity = manage.crtImg(iconHumidity, '', 'img-humidity');
	const dailySpdWrapper = manage.crtElement('', '', 'daily-container', 'div');
	const dailySpd = manage.crtElement(speed, 'daily-spd', 'daily-contents', 'p');
	const iWindSpd = manage.crtImg(iconWindSpd, '', 'img-spd');
	const dailyDegWrapper = manage.crtElement('', '', 'daily-container', 'div');
	const dailyDeg = manage.crtElement(deg, 'daily-deg', 'daily-contents', 'p');
	const iWindDeg = manage.crtImg(iconCompass, '', 'img-deg');

	dailyLower.append(dailyLowerLeft, dailyLowerRight);
	dailyHumidityWrapper.append(dailyHumidity, iHumidity);
	dailySpdWrapper.append(iWindSpd, dailySpd);
	dailyDegWrapper.append(iWindDeg, dailyDeg);
	dailyLowerLeft.append(dailyHumidityWrapper);
	dailyLowerRight.append(dailySpdWrapper, dailyDegWrapper);
	dailyWrapper.append(dailyDate, dailyTemp, dailyFeels, dailyIcon, dailyLower);
	parent.append(dailyWrapper);
}

// display the weather data about the current hour/day
function displayCurrentOutput(parent) {
	const icon = weatherData.current.weather[0].icon;
	const timezone = weatherData.timezone;
	const date = convertTZ(new Date, timezone);

	let temp = weatherData.current.temp;
	let feels = weatherData.current.feels_like;
	const humidity = weatherData.current.humidity;
	const speed = `${windSpeedToMPH(weatherData.current.wind_speed)} mph :Wind Speed`;
	const deg = `${windDegToDir(weatherData.current.wind_deg)} :Wind Degree`;
	// temp conversion
	temp = convertTemp(temp);
	temp = temp.slice(0, -1);
	feels = convertTemp(feels);

	// DOM instances

	const currentUprCont = manage.crtElement('', 'current-upper', 'current-upper', 'div');

	// DOM elements in the upper left side of the current main
	const upperLeftSide = manage.crtElement('', 'current-upper-left', 'current-upper-left', 'div');
	const currentLocation = manage.crtElement(fetchData.getAreaName(), 'current-location', 'current-contents', 'p');
	const currentDate = manage.crtElement(formatFullDate(date), 'current-day', 'current-contents', 'p');
	const currentTime = manage.crtElement(formatHourMin(date), 'current-time', 'current-contents', 'p');

	// DOM elements in the upper right side of the current main
	const upperRightSide = manage.crtElement('', 'current-upper-right', 'current-upper-right', 'div');
	const currentIcon = manage.crtImg(getWeatherIcon(icon), 'current-icon', 'current-contents');
	const tempCelcius = manage.crtElement(checkTempUnit(), 'tempC', 'choose-temp', 'div');

	// the element that contains the current temperature
	const currentTemp = manage.crtElement(temp, 'current-temp', 'current-contents', 'p');

	// the lower side container
	const currentLwrCont = manage.crtElement('', 'current-lower', 'current-lower', 'div');

	// DOM elements in the lower left side of the current main
	const lowerLeftSide = manage.crtElement('', 'current-lower-left', 'current-lower-left', 'div');
	const currentFeels = manage.crtElement(`Feels Like: ${feels}`, 'current-feels', 'current-contents', 'p');
	const currentHumidity = manage.crtElement(`Humidity: ${humidity}%`, 'current-humidity', 'current-contents', 'p');

	// DOM elements in the lower right side of the current main
	const lowerRightSide = manage.crtElement('', 'current-lower-right', 'current-lower-right', 'div');
	const currentSpeed = manage.crtElement(speed, 'current-speed', 'current-contents', 'p');
	const currentDegree = manage.crtElement(deg, 'current-deg', 'current-contents', 'p');

	currentLwrCont.append(lowerLeftSide, lowerRightSide);
	lowerLeftSide.append(currentFeels, currentHumidity);
	lowerRightSide.append(currentSpeed, currentDegree);
	currentUprCont.append(upperLeftSide, upperRightSide);
	upperLeftSide.append(currentLocation, currentDate, currentTime);
	upperRightSide.append(currentIcon, tempCelcius);
	parent.append(currentUprCont, currentTemp, currentLwrCont);
	renderBgColor();
	updateClock(); // auto refresh clock by 100
	tempCelcius.addEventListener('click', () => {
		toggleTemp();
		displayInfo();
	});
}

// the color is based on the current time of the day: morns, afternoon, night
function renderBgColor() {
	const { timezone } = weatherData;
	const date = convertTZ(new Date(), timezone);
	const hours = getLocalHours(date);
	bgManipulation.bgChg(hours);
}

// get the icon from the weather API
function getWeatherIcon(icon) {
	return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

// update clock every 1000ms = 1second
function updateClock() {
	const { timezone } = weatherData;
	const date = convertTZ(new Date, timezone);
	const currentTime = document.getElementById('current-time');
	currentTime.textContent = formatHourMin(date);
	setTimeout(updateClock, 1000);
}

// controller function - create and display DOM elements
function displayInfo() {
	clearMainContents();
	getHourlyData(DOM.lowerMain);
	getDailyData(DOM.dailyMain);
	displayCurrentOutput(DOM.currentMain);
}

// clear the contents inside the weather data container
function clearMainContents() {
	DOM.currentMain.textContent = '';
	DOM.dailyMain.textContent = '';
	DOM.lowerMain.textContent = '';
}