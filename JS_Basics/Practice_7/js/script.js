//1st task:
const getPopup = document.querySelector('.request');
const itsPopup = document.querySelector('.popup');
const closePopup = document.querySelector('.closePopup i');

getPopup.addEventListener('click', function(){
	itsPopup.style.display = 'flex';
})

closePopup.addEventListener('click',function(){
	itsPopup.style.display = 'none';
})

//2nd task:
const openMenu = document.querySelector('.openMenu');
const itsMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu i');

openMenu.addEventListener('click', function(){
	itsMenu.style.left = 0;
})

closeMenu.addEventListener('click', function(){
	itsMenu.style.left = '-50vw';
})