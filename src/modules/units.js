// convert the values of the data to a different unit
const DIRECTIONS = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
	'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
const RANGE = [349, 11, 34, 56, 78, 101, 124, 146,
	169, 191, 214, 235, 259, 281, 304, 326];
let isTempCelcius = true;

// validate the current temp unit
const checkTempUnit = () => {
	if (isTempCelcius === true){
		return `${String.fromCharCode(176)}C`;
	} else {
		return `${String.fromCharCode(176)}F`;
	}
};
// toggle the temperature unit
const toggleTemp = () => {
	isTempCelcius === true ? isTempCelcius = false: isTempCelcius = true;
};

// translate from kelvin to celcius
const kelvinToCelcius = (K) => {
	const celcius = K - 273.15;
	return `${Math.round(celcius)}${String.fromCharCode(176)}C`;
};

// translate from kelvin to fahrenheit
const kelvinToFahrenheit = (K) => {
	const fah = 1.8 * (K - 273.15) + 32;
	return `${Math.round(fah)}${String.fromCharCode(176)}F`;
};
// converts all the temperature output when the temp is switched to a different unit
const convertTemp = (t) => {
	return isTempCelcius === true ? kelvinToCelcius(t) : kelvinToFahrenheit(t);
};

//meter/second to meter per hour
const windSpeedToMPH = (n) => {
	return Math.round(n * 2.237);
};

//replace the 0 - 360 degree with N,E,W,S
const windDegToDir = (n) => {
	n > 349 ? n = 0 : n;
	let index;
	for (let i = 0; i < DIRECTIONS.length - 1; i++) {
		index = (i + DIRECTIONS.length) % DIRECTIONS.length;
		if (n > RANGE[i] || n < RANGE[index + 1]) {
			return DIRECTIONS[i];
		}
	}
};

export {
	checkTempUnit,
	toggleTemp,
	convertTemp,
	windSpeedToMPH,
	windDegToDir,
};
