//DOM instances of existing elements from html file
const DOM = (() => {
    const content = document.getElementById('content');
    const main = document.getElementById('main');
    const debugOutput = document.getElementById('debug');
    const cityInput = document.getElementById('city-input');
    const stateInput = document.getElementById('state-input');
    const countryInput = document.getElementById('country-input');
    const form = document.querySelector('form');
    return {
        content,
        main,
        debugOutput,
        cityInput,
        stateInput,
        countryInput,
        form,
        debug,
        strInput() {
            if (!countryInput.value) {
                if (!stateInput.value) {
                    return `${cityInput.value}`;
                } else {
                    return `${cityInput.value}, ${stateInput.value}`;
                }
            } else if (!stateInput.value) {
                if (!countryInput.value) {
                    return `${cityInput.value}`;
                } else {
                    return `${cityInput.value}, ${countryInput.value}`;
                }
            } else if (!cityInput.value){
                if (!countryInput.value) {
                    return `${stateInput.value}`;
                } else {
                    return `${stateInput.value}, ${countryInput.value}`;
                }
            } else{
                return `${cityInput.value}, ${stateInput.value}, ${countryInput.value}`;
            }
        },
        locationInput() {
            let str = `${cityInput.value},${stateInput.value},${countryInput.value}`;
            return str.split('').map(x => x == ' ' ? x = '+' : x).join('');
        }
    }
})()

export default DOM;