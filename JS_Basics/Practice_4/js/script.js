console.log("you are at " +window.location)

let Variable = prompt("Введите число");
Variable = parseInt(Variable);

if (Variable>0) {
	console.log(Variable);
}else if (Variable<0) {
	console.log('Ваше число было отрицательное, но его модуль = '+Math.abs(Variable));
}else {
	Variable = prompt("Введите другое число");
}