// DOM instances of existing elements from html file
const DOM = (() => {
	const content = document.getElementById('content');
	const main = document.getElementById('main');
	const debugOutput = document.getElementById('debug');
	const cityInput = document.getElementById('city-input');
	const stateInput = document.getElementById('state-input');
	const countryInput = document.getElementById('country-input');
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
		debugOutput,
		cityInput,
		stateInput,
		countryInput,
		form,
		alertBtn,
		alertDesc,
		alertEvents,
		alertText,
		alertClose,
		modal,
		strInput() {
			if (!countryInput.value) {
				if (!stateInput.value) {
					return `${cityInput.value}`;
				}
				return `${cityInput.value}, ${stateInput.value}`;
			} if (!stateInput.value) {
				if (!countryInput.value) {
					return `${cityInput.value}`;
				}
				return `${cityInput.value}, ${countryInput.value}`;
			} if (!cityInput.value) {
				if (!countryInput.value) {
					return `${stateInput.value}`;
				}
				return `${stateInput.value}, ${countryInput.value}`;
			}
			return `${cityInput.value}, ${stateInput.value}, ${countryInput.value}`;
		},
		locationInput() {
			const str = `${cityInput.value},${stateInput.value},${countryInput.value}`;
			return str.split('').map((x) => (x == ' ' ? x = '+' : x)).join('');
		},
	};
})();

export default DOM;
