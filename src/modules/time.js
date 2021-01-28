//convert dates by the appropriate local timezone
//object used to format dates
const OPTIONS = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};

const DAILY = {
	weekday: 'short',
	month: 'short',
	day: 'numeric',
};
function convertTZ(date, tzString) {
	return new Date((typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {timeZone: tzString}));
}

// format -> HH:MM:SS AM/PM
function formatHourMin(date) {
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	const ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = ('0'+minutes).slice(-2);
	seconds = ('0'+seconds).slice(-2);
	const strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
	return strTime;
}

//format -> HH AM/PM
function formatHourOnly(date, i) {
	let hours = date.getHours() + i;
	let hoursNextDay = (hours-24); //change the variable if is passed 11pm
	hours > 23 ? hours = 0 + hoursNextDay : hours;
	let ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	let strTime = hours + ' ' + ampm;
	return strTime;
}

function accumulateDays(date, i) {
	let day = date.getDays() + i;

}

function formatFullDate(date) {
	return date.toLocaleDateString('en-US', OPTIONS);
}
function formatShortDate(date) {
	return date.toLocaleDateString('en-US', DAILY);
}
export {
	convertTZ,
	formatHourMin,
	formatHourOnly,
	formatFullDate,
	formatShortDate,
}