//convert the values of the data to a different unit
const DIRECTIONS = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
    'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
const RANGE = [349, 11, 34, 56, 78, 101, 124, 146,
    169, 191, 214, 235, 259, 281, 304, 326];
const kelvinToCelcius = (K) => {
    const celcius = K - 273.15;
    return `${Math.round(celcius)}${String.fromCharCode(176)}C`;
}

const kelvinToFahrenheit = (K) => {
    const fah = 1.8 * (K - 273.15) + 32;
    return `${Math.round(fah)}${String.fromCharCode(176)}F`;
}

const windSpeedToMPH = (n) => {
    return Math.round(n * 2.237);
}

const windDegToDir = (n) => {
    n > 349 ? n = 0 : n
    let index;
    for (let i = 0; i < DIRECTIONS.length-1; i++) {
        index = (i + DIRECTIONS.length) % DIRECTIONS.length;
        if (n > RANGE[i] || n < RANGE[index+1]) {
            return DIRECTIONS[i];
        }
    }
}

export { kelvinToCelcius, kelvinToFahrenheit, windSpeedToMPH, windDegToDir };