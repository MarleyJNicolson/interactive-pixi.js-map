import Vue from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

const GSAP = {
  install(Vue, options) {
    Vue.prototype.$gsap = gsap;
    Vue.prototype.$ScrollTrigger = ScrollTrigger;
    Vue.prototype.$Draggable = Draggable;
  },
};

Vue.use(GSAP);