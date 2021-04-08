console.log("you are at " +window.location)

const bodyColor = document.querySelector('body');
bodyColor.style['background-color'] = '#696969';

const pageColor = document.querySelector('.page');
pageColor.style.color = 'ghostwhite';

const name = document.querySelector('.name');
name.innerHTML = "<h1>DJ Rashad</h1>";

const imageTrue = document.querySelector('img');
imageTrue.setAttribute('src', 'https://www.centraltrack.com/wp-content/uploads/4555_1.jpg');

const animBorder = document.querySelector('.short-bio');
animBorder.className += ' animated';

//const paragraph = document.querySelector('p');
//console.log(paragraph.getAttribute('class'));