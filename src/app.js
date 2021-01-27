import fetchData from './modules/fetch_data.js';
import DOM from './modules/elements.js';
import manage from './modules/helpers.js';
import { kelvinToCelcius, kelvinToFahrenheit, windSpeedToMPH, windDegToDir } from './modules/units.js';
import { convertTZ, formatHourMin, formatHourOnly, formatFullDate } from './modules/time.js';
import { getAreaFromCoordinates } from './modules/current_location.js';
import './styles/reset.css';
import './styles/style.css';

//weather variables
let weatherData;
let location;
let isTempCelcius = false;

//ask the user for a permission to collect the former's coordinates
window.onload = () => {
    defaultLocation();
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(assignUserLocation);
    } else {;
        console.log('Geolocation is not supported by this browser');
    }
}

//assign the user's location as current
async function assignUserLocation(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    fetchData.setCoordinates(lat,lon);
    const data = await getAreaFromCoordinates({lat,lon});
    let areaName = data.osmtags.wikipedia;
    if (areaName.indexOf(':') !== -1) {
        areaName = areaName.split(':')[1];
      }
    fetchData.setAreaName(areaName);
    console.log(data);
    try{
        await fetchWeatherData(fetchData.getWeatherURL());
    } catch(e) {
        console.log(`Error: ${e}`);
    }
}

//use default location if the user disallow the humble permission
async function defaultLocation() {
    const lat = 90;
    const lon = 0;
    fetchData.setCoordinates(lat,lon);
    fetchData.setAreaName('North Pole');
    const data = await fetchData.getWeatherURL();
    console.log(fetchData.getAreaName());
    console.log(data);
    try {
        await fetchWeatherData(data);
    } catch(e) {
        console.log(`Error: ${e}`);
    }
}

//submit the form to get the input of coordinates and overwrite to the respective
//variables, appended within the weather url.
DOM.form.onsubmit = async(e) => {
    e.preventDefault();
    fetchData.setSearchArea(DOM.locationInput());
    fetchData.setAreaName(DOM.strInput());
    try {
        DOM.debug.textContent = '';
        await getCoordinates(fetchData.getLocationURL());
    }
    catch(error) {
        DOM.debug.textContent = 'This location doesn\'t exist!!';
        console.log(error);
    }
}

//get the coordinates
async function getCoordinates(data) {
    const response = await fetch(data, {mode: 'cors'});
    const locationData = await response.json();
    fetchData.setCoordinates(locationData[0].lat,locationData[0].lon);
    console.log(fetchData.getAreaName());
    try {
        await fetchWeatherData(fetchData.getWeatherURL());
    }
    catch(e) {
        console.log(`Error: ${e}`);
    }
}

//fetch the data and display it 
async function fetchWeatherData(data) {
    const response = await fetch(data,{mode: 'cors'});
    weatherData = await response.json();
    console.log(fetchData.getWeatherURL());
    console.log(fetchData.getAreaName());
    displayInfo();
}

function displayInfo() {
    main.textContent = '';
    const upperMain = manage.crtElement('','upper-main','weather-container','div');
    const lowerMain = manage.crtElement('','lower-main','weather-container','div');
    const currentMain = manage.crtElement('','current-main','weather-container','div');
    const dailyMain = manage.crtElement('','daily-main','weather-container','div');
    DOM.main.append(upperMain, lowerMain);
    upperMain.append(currentMain, dailyMain);
    getHourlyData(lowerMain);
    //getDailyData(dailyMain);
    displayCurrentOutput(currentMain);
}

const getHourlyData = async (parent) => {
    for(let i = 0; i < 9; i++) {
        await displayHourlyOutput(i,parent);
    } 
}

//display hourly contents 
function displayHourlyOutput(i,parent) {
    //temperature data from current object
    let temp = weatherData.hourly[(i+1)+i].temp;
    let feels_like = weatherData.hourly[(i+1)+i].feels_like;
        
    const icon = weatherData.hourly[(i+1)+i].weather[0].icon;
    const humidity = weatherData.hourly[(i+1)+i].humidity + '%';
    const timezone = weatherData.timezone;
    const date = convertTZ(new Date,timezone)

    temp = convertTemp(temp);
    feels_like = convertTemp(feels_like);

    //DOM instances
    const hourlyMain = manage.crtElement('',`hrly-main${i+1}`,'hrly-contents','div');
    const hourlyTemp = manage.crtElement(`${temp}`,`hrly-temp${i+1}`,'hrly-temp','p');
    const hourlyFeels = manage.crtElement(`Feels like: ${feels_like}`,`hrly-feels${i+1}`,'hrly-container','p');
    const hourlyIcon = manage.crtImg(getWeatherIcon(icon),`hrly-icon${i+1}`,'hrly-icons');
    const hourlyTime = manage.crtElement(formatHourOnly(date, (i+1)+i),`hrly-time${i+1}`,'hrly-time','p');
    const hourlyHumidity = manage.crtElement(`Humidity: ${humidity}`,`hrly-humidity${i+1}`,'hrly-container','p');

    //append los elementos de familia 
    parent.append(hourlyMain);
    hourlyMain.append(hourlyTime,hourlyTemp,hourlyIcon,hourlyFeels,hourlyHumidity);
}

const getDailyData = async (parent) => {
    for(let i = 0; i < 6; i++) {
        await displayDailyOutput(i,parent);
    } 
}

// function displayDailyOutput(i,parent){
// const 
// }

//display the weather data about the current hour/day
function displayCurrentOutput(parent){
    const icon = weatherData.current.weather[0].icon;
    const timezone = weatherData.timezone;
    const date = convertTZ(new Date,timezone)

    let temp = weatherData.current.temp;
    let feels = weatherData.current.feels_like;
    const humidity = weatherData.current.humidity;
    const speed = `${windSpeedToMPH(weatherData.current.wind_speed)} mph :Wind Speed`;
    const deg = `${windDegToDir(weatherData.current.wind_deg)} :Wind Degree`;
    //temp conversion
    temp = convertTemp(temp); 
    temp = temp.slice(0, -1)
    feels = convertTemp(feels);

    //DOM instances
    const currentUprCont = manage.crtElement('','current-upper','current-upper','div');
    //DOM elements in the upper left side of the current main
    const upperLeftSide = manage.crtElement('','current-upper-left','current-upper-left','div');
    const currentLocation = manage.crtElement(fetchData.getAreaName(),'current-location','current-contents','p');
    const currentDate = manage.crtElement(formatFullDate(date),'current-day','current-contents','p');
    const currentTime = manage.crtElement(formatHourMin(date),'current-time','current-contents','p');
    //DOM elements in the upper right side of the current main
    const upperRightSide = manage.crtElement('','current-upper-right','current-upper-right','div');
    const currentIcon = manage.crtImg(getWeatherIcon(icon),`current-icon`,'current-contents');
    const tempCelcius = manage.crtElement(`${String.fromCharCode(176)}C`,'tempC','choose-temp','div');
    const tempFah = manage.crtElement(`${String.fromCharCode(176)}F`,'tempF','choose-temp','div');
    //the element that contains the current temperature
    const currentTemp = manage.crtElement(temp,'current-temp','current-contents','p');
    //the lower side container
    const currentLwrCont = manage.crtElement('','current-lower','current-lower','div');
    //DOM elements in the lower left side of the current main
    const lowerLeftSide = manage.crtElement('','current-lower-left','current-lower-left','div');
    const currentFeels = manage.crtElement(`Feels Like: ${feels}`,'current-feels','current-contents','p');
    const currentHumidity = manage.crtElement(`Humidity: ${humidity}%`,'current-humidity','current-contents','p');
    //DOM elements in the lower right side of the current main
    const lowerRightSide = manage.crtElement('','current-lower-right','current-lower-right','div');
    const currentSpeed = manage.crtElement(speed,'current-speed','current-contents','p')
    const currentDegree = manage.crtElement(deg,'current-deg','current-contents','p');

    currentLwrCont.append(lowerLeftSide,lowerRightSide);
    lowerLeftSide.append(currentFeels,currentHumidity);
    lowerRightSide.append(currentSpeed,currentDegree);
    currentUprCont.append(upperLeftSide,upperRightSide);
    upperLeftSide.append(currentLocation,currentDate,currentTime);
    upperRightSide.append(currentIcon,tempCelcius,tempFah);
    parent.append(currentUprCont,currentTemp,currentLwrCont);

    updateClock(); //auto refresh clock by 100
}

function getWeatherIcon(icon) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

function updateClock() {
    const timezone = weatherData.timezone;
    const date = convertTZ(new Date,timezone);
    const currentTime = document.getElementById(`current-time`);
    currentTime.textContent = formatHourMin(date);
    setTimeout(updateClock,1000);
}

const convertTemp = (t) => {
    return isTempCelcius === true ? kelvinToCelcius(t) : kelvinToFahrenheit(t);
}