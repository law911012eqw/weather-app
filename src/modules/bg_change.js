import DOM from './elements';

const bgManipulation = (() => {
	const WARM_COLORS = ['rgb(255, 195, 16)', 'rgb(248, 185, 23)', 'rgb(242, 174, 28)'];
	const AFTERNOON_COLORS = ['rgb(56, 211, 107)', 'rgb(56, 195, 107)', 'rgb(56, 180, 99)'];
	const COOL_COLORS = ['rgb(56, 156, 241)', 'rgb(56, 134, 235)', 'rgb(56, 121, 221)'];
	return {
		bgChg(hours) { // background change
			if (hours >= 0 && hours < 12) {
				DOM.currentMain.style.background = WARM_COLORS[0];
				DOM.dailyMain.style.background = WARM_COLORS[1];
				DOM.lowerMain.style.background = WARM_COLORS[2];
			} else if (hours >= 12 && hours < 17) {
				DOM.currentMain.style.background = AFTERNOON_COLORS[0];
				DOM.dailyMain.style.background = AFTERNOON_COLORS[1];
				DOM.lowerMain.style.background = AFTERNOON_COLORS[2];
			} else if (hours >= 17 && hours < 24) {
				DOM.currentMain.style.background = COOL_COLORS[0];
				DOM.dailyMain.style.background = COOL_COLORS[1];
				DOM.lowerMain.style.background = COOL_COLORS[2];
			}
		},
	};
})();

export default bgManipulation;
