const defineForm = document.forms[0];
const showResult = document.querySelector('.total');

defineForm.onsubmit = function(x) {
	x.preventDefault();
	showResult.innerHTML = Math.sin(defineForm.elements.angle.value);
}