let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
]

console.log(crypto);

//Возьмем название крипты из массива объектов crypto:
let nameArray = document.querySelectorAll('.crypto__name');

nameArray.forEach(names =>{
    for (let objects of crypto) {
      for (titles in objects) {
        if (typeof objects[titles] === "string") {
          console.log(objects[titles]);
          names.innerHTML = "<h2>" +objects[titles]+ "</h2>"
        }
      }
    }
})


//Возьмем стоимость крипты из массива crypto в html:
let valueArray = document.querySelectorAll('.crypto__value');


//Берем значения для ширины цветного блока:
let diagramArray = document.querySelectorAll('.crypto__diagram');