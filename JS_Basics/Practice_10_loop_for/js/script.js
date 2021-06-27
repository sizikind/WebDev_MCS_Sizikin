const takeDiv = document.querySelector('div');
console.log(takeDiv);

let arrayHTML = '<div>Делятся на 6 без остатка: </div>'

for (let i=1; i<=100000; i++) {
	if (i % 6 === 0) {
		let showArray = [i];
		arrayHTML += '<div>'+showArray+'</div>';
	}
}

takeDiv.innerHTML = arrayHTML; 