// DOM instances of existing elements from html file
const DOM = (() => {
	const content = document.getElementById('content');
	const main = document.getElementById('main');
	const upperMain = document.getElementById('upper-main');
	const lowerMain = document.getElementById('lower-main');
	const currentMain = document.getElementById('current-main');
	const dailyMain = document.getElementById('daily-main');
	const userLocation = document.getElementById('user-location');
	const debugOutput = document.getElementById('debug');
	const areaInput = document.getElementById('area-input');
	const form = document.querySelector('form');
	const alertBtn = document.getElementById('alert-btn');
	const alertDesc = document.getElementById('alert-desc');
	const alertEvents = document.getElementById('alert-events');
	const alertText = document.getElementById('alert-text');
	const alertClose = document.getElementById('alert-close');
	const modal = document.getElementById('modal');
	return {
		content,
		main,
		upperMain,
		currentMain,
		dailyMain,
		lowerMain,
		userLocation,
		debugOutput,
		areaInput,
		form,
		alertBtn,
		alertDesc,
		alertEvents,
		alertText,
		alertClose,
		modal,
		// not in the best state but its functionality format the string based
		// on the condition
		strInput() {
			return areaInput.value;
		},
		locationInput() {
			const str = `${areaInput.value}`;
			// spaces are replace with '+' which is used for the string within URL
			return str.split('').map((x) => (x == ' ' ? x = '+' : x)).join('');
		},
	};
})();

export default DOM;
