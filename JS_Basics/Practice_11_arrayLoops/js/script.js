let newSchool = [
  [
    ['Lil Yachty', 'Playboi Carti', 'Lil Uzi Vert'],
    ['Sonny Digital', 'Metro Boomin', '12Hunna']
  ],
  [
    ['Yung Lean', 'Ecco2K', 'Bladee'],
    ['Whitearmor', 'PJ Beats', 'Yung Gud']
  ]
]

//первый способ
for (let school of newSchool) {
	for (let artists of school) {
		console.log(artists);
	}
}

//второй способ
for (let i = 0; i < newSchool.length; i++) {
	for (let j = 0; j < newSchool[i].length; j++) {
		console.log(newSchool[i][j]);
	}
}