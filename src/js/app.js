import * as flsFunction from "./modules/function.js";
import smoothscroll from 'smoothscroll-polyfill';

flsFunction.isWebp();
flsFunction.calcWidthScroll();

smoothscroll.polyfill();

let im = new Inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false,
    showMaskOnFocus: false,
    jitMasking: true,
    inputmode: 'tel'
});

// im.mask(document.querySelector('#phone'));
