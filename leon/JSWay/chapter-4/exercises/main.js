function carouselTurns (){
	for (let i=1;i<10;i++){
		
		document.querySelector('#textHere').innerText+=(`turn ${i}`)

	}
}

carouselTurns()
//When it's done, improve it so that the number of turns is given by the user.



/*
for (i=1;i<= 10; i++){
	let numberTurns = document.querySelector('#numberOfTurns').value
	
}
*/