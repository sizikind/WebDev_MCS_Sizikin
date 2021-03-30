let totalCash = parseFloat(window.prompt("Сколько наличных с собой?"))

let watchesCount = parseInt(window.prompt("Сколько выбрали часов?"))
let earringsCount = parseInt(window.prompt("Сколько выбрали серёжек?"))

let watchesSum = parseFloat(window.prompt("Цена одних часов?"))*watchesCount
let earringsSum = parseFloat(window.prompt("Цена одних серёжек?"))*earringsCount

document.body.innerHTML = totalCash>=(watchesSum+earringsSum)