 //--- Easy
//create a variable and assign it a number
let varaible = 1
//minus 10 from that number
varaible = varaible - 10
//print that number to the console
console.log(varaible)
//--- Medium
//create a variable that holds a value from the input
//let newValue = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
//newValue = newValue + 25
//alert that number
//alert(newValue)
//--- Hard
//create a variable that holds the h1
const h1Holder = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
h1Holder.addEventListener('click',sum)
function sum() {
	let newValue = document.querySelector('#danceDanceRevolution').value
	console.log(varaible + Number(newValue))
}

