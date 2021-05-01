console.log("you are at " +window.location)

let randomNumb = parseInt(prompt("Введите число"));

if (randomNumb>0) {
	console.log(randomNumb);
}else if (randomNumb<0) {
	console.log('Ваше число было отрицательное, но его модуль = '+Math.abs(randomNumb));
}else {
	randomNumb = prompt("Введите другое число");
}