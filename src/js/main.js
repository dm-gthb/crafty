'use strict';

var toggler = document.getElementById('toggler');

function mobileNavVisibleToggle(event) {
  event.preventDefault();
  toggler.classList.toggle('toggler--close');
}


if (toggler) {
  toggler.addEventListener('click', mobileNavVisibleToggle);
}

var tl = new TimelineMax();

tl
  .fromTo('.main-logo', 0.7, {y:-200, opacity:0}, {y:0, opacity:1})
  .fromTo('.page-header__title', 0.5, {y:40, opacity: 0}, {y:0, opacity:1})
  .fromTo('.page-header__description', 0.5, {y:-20, opacity: 0}, {y:0, opacity:1})
  .fromTo('.toggler', 0.4, {rotation: -180, opacity:0}, {rotation:0, opacity:1})
  .from('.btn--learn-more', 1, {opacity:0, scale:0, ease:Bounce.easeOut});


