console.log("you are at " +window.location)

function lookAtThis(num) {
	const exp = Math.round(Math.random()*(9-1)+1); 
	return Math.abs(Math.pow(num, exp));
}

console.log(lookAtThis(2));