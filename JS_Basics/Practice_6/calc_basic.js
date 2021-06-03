let haveEnough = function() {
	let totalCash = parseFloat(window.prompt("Сколько наличных с собой?"))

	let watchesCount = parseInt(window.prompt("Сколько выбрали часов?"))
	let earringsCount = parseInt(window.prompt("Сколько выбрали серёжек?"))

	let watchesSum = parseFloat(window.prompt("Цена одних часов?"))*watchesCount
	let earringsSum = parseFloat(window.prompt("Цена одних серёжек?"))*earringsCount

	if (totalCash>=(watchesSum+earringsSum)) {
		alert ('Enough $$$');
	} else {
		alert ('Not enough $$$');
	}
}

haveEnough();