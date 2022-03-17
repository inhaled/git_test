//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function print21 (){
	for (let i=1; i<22;i++){
		console.log('21')
	}
}

print21()
//Bonus can you make it print '21' 21 times to the dom?
function print21 (){
	for (let i=1; i<10;i++){
		document.querySelector('#textHere').innerText += ('turn')
	}
}

print21()


