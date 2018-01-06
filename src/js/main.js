'use strict';

// Header toggler
var toggler = document.getElementById('toggler');
var pageNav = document.querySelector('.page-nav');

function mobileNavVisibleToggle(event) {
  event.preventDefault();
  toggler.classList.toggle('toggler--close');
  pageNav.classList.toggle('page-nav--active');
}

if (toggler) {
  toggler.addEventListener('click', mobileNavVisibleToggle);
}


// Header animation
var tl = new TimelineMax();

tl
  .fromTo('.main-logo', 0.7, {y:-200, opacity:0}, {y:0, opacity:1})
  .fromTo('.page-header__title', 0.5, {y:40, opacity: 0}, {y:0, opacity:1})
  .fromTo('.page-header__description', 0.5, {y:-20, opacity: 0}, {y:0, opacity:1})
  .fromTo('.toggler', 0.4, {rotation: -180, opacity:0}, {rotation:0, opacity:1})
  .from('.btn--learn-more', 1, {opacity:0, scale:0, ease:Bounce.easeOut});


// Header 'learn more' button
var learnMoreBtn = document.querySelector('.btn--learn-more');
var pageHeader = document.querySelector('.page-header');
const viewportHeight = pageHeader.offsetHeight;

learnMoreBtn.addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollBy({ top: viewportHeight, behavior: 'smooth' });
});


// Projects navigation
var controls = document.querySelectorAll('.projects__nav-link');
var projects = document.querySelectorAll('.projects__item');

for (var i = 0; i < controls.length; i++) {
   clickControl(controls[i]);
}

function toggleFilter(control) {

  for (var k = 0; k < controls.length; k++) {
    controls[k].classList.remove('projects__nav-link--active')
  }

  for (var l = 0; l < projects.length; l++) {
    projects[l].classList.remove('projects__item--active')
  }

  control.classList.add('projects__nav-link--active');

  var clickedTypeProjects = document.querySelectorAll('a.' + control.dataset.filter);
  if (clickedTypeProjects) {
    for (var m = 0; m < clickedTypeProjects.length; m++) {
      clickedTypeProjects[m].classList.add('projects__item--active');
    }
  }
}

function clickControl(control) {
  control.addEventListener('click', function() {
    event.preventDefault();
    toggleFilter(control);
  });
}

var defaultFilter = document.querySelector('button.branding');
toggleFilter(defaultFilter);
