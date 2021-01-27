const manage = (() => {
    return {
        crtElement(eText,eId,eClass,eTag) {
            let el = document.createElement(eTag);
            ( el.textContent = eText, el.id = eId, el.className = eClass);
            return el;
        },
        crtImg(eSrc,eId,eClass) {
            let img = document.createElement('img');
            ( img.src = eSrc, img.id = eId, img.className = eClass );
            return img;
        },
        modifyAttr(el,eType,eProp){ el.setAttribute(eType, eProp); }
    }
})()

export default manage;