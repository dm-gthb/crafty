'use strict';

var toggler = document.getElementById('toggler');

function mobileNavVisibleToggle(event) {
    event.preventDefault();
    toggler.classList.toggle('toggler--close');
}


if (toggler) {
    toggler.addEventListener('click', mobileNavVisibleToggle);
}
