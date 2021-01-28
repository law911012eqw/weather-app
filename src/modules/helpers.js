// helper functions
// reusable functions that create/modify elements
const manage = (() => ({
	crtElement(eText, eId, eClass, eTag) {
		const el = document.createElement(eTag);
		(el.textContent = eText, el.id = eId, el.className = eClass);
		return el;
	},
	crtImg(eSrc, eId, eClass) {
		const img = document.createElement('img');
		(img.src = eSrc, img.id = eId, img.className = eClass);
		return img;
	},
	modifyAttr(el, eType, eProp) { el.setAttribute(eType, eProp); },
}))();

export default manage;
