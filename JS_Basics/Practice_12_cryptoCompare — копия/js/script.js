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

//находим контейнер в разметке, который будем наполнять
const container = document.querySelector('.items');

//запускаем цикл по объектам внутри исходного массива
crypto.forEach(currency => {
 
  const cryptoName = document.createElement('h1');//создали контейнер для каждого имени крипты
  const cryptoValue = document.createElement('h2');//создали контейнер для значений крипты
  const valueScale = document.createElement('div');//cоздали контейнер под шкалу

  //добавляем классы созданным блокам
  cryptoName.classList.add('crypto-name');
  cryptoValue.classList.add('crypto-value');
  valueScale.classList.add('value-scale');

  //присваиваем значения
  cryptoName.textContent = currency.name;
  cryptoValue.textContent = currency.price;
  valueScale.style.width = currency.price+['px'];

  //добавляем в html-разметку
  container.append(cryptoName,cryptoValue,valueScale);
})

//создаем массив с разными цветами
const colorsForScale = ['red', 'green', 'blue', 'navy', 'yellow', 'brown'];
//выбираем контейнеры со шкалой
const scaleArr = document.querySelector('.value-scale');

colorsForScale.forEach(color => {
  scaleArr.style.backgroundColor = color;
})
