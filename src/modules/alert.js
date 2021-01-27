import manage from './helpers.js';
import DOM from './elements.js';

let isDisplay = true; // boolean - display/not display
// display alert description with accordance to its default
function alertDisplay(weatherData) {
	// this removes all the children of the following element
	DOM.alertEvents.textContent = '';
	DOM.alertText.textContent = '';

	// default text when opening alert box
	const alertDesc = weatherData.alerts[0].description;

	// loop and print each available data alerts in the event div
	for (let i = 0; i < weatherData.alerts.length; i++) {
		const eventText = weatherData.alerts[i].event;
		const event = manage.crtElement(eventText, `event-txt${i + 1}`, 'event-txts', 'div');
		DOM.alertEvents.append(event);
	}
	document.getElementById('event-txt1').classList.add('active-state');
	const alert = manage.crtElement(alertDesc, 'alert-txt', 'alert-txts', 'p');
	DOM.alertText.append(alert, DOM.alertClose);
	activateAlertEvent(weatherData);
}

// toggle to display or notDisplay
const toggleDisplayBoolean = () => {
	isDisplay === true ? isDisplay = false : isDisplay = true;
};
const resetDisplay = () => { isDisplay = true; }; // reset display to true

// validate whether alerts exists if it is or else then continue to the following condition
function getAlert(data) {
	if (data.alerts) {
		resetDisplay();
		manage.modifyAttr(DOM.alertDesc, 'style', 'display: block;');
		manage.modifyAttr(DOM.alertBtn, 'style', 'display: block;');
		alertDisplay(data);
		DOM.alertDesc.className = '';
	} else {
		manage.modifyAttr(DOM.alertDesc, 'style', 'display: none;');
		manage.modifyAttr(DOM.alertBtn, 'style', 'display: none;');
		toggleDisplayBoolean();
	}
}

function toggleDisplay() {
	if (isDisplay === true) {
		manage.modifyAttr(DOM.modal, 'style', 'display: none;');
		DOM.alertDesc.classList.toggle('slideDown');
	} else {
		manage.modifyAttr(DOM.modal, 'style', 'display: block;');
		DOM.alertDesc.classList.toggle('slideUp');
	}
}

// add visual active state if the alert text is displayed already
function activateAlertEvent(data) {
	const alertEvents = document.querySelectorAll('.event-txts');
	alertEvents.forEach((x, i, arr) => {
		x.addEventListener('click', () => {
			updateAlertText(i, data);
			alertEvents.forEach((e) => {
				if (e.classList.contains('active-state')) {
					e.classList.remove('active-state');
				}
			});
			arr[i].classList.add('active-state');
		});
	});
}

// update the alert paragraph when the event text is clicked
function updateAlertText(i, data) {
	DOM.alertText.textContent = '';
	const alertDesc = data.alerts[i].description;
	const alert = manage.crtElement(alertDesc, 'alert-txt', 'alert-txts', 'p');
	DOM.alertText.append(alert, DOM.alertClose);
}
export { getAlert, toggleDisplay };
