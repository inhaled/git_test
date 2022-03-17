//---Easy
//create a function that subtracts two numbers and alerts the difference

//adder(100,2)
/*
divider(2,4,6)
let mult = multiplier(4,6,2)
alert(mult)



function adder (num1,num2){
	alert(Number(num1) + Number(num2));
	alert('added')
}

//create a function that divides three numbers and console logs the quotient

function divider(zebra, forest, unicorn){
	console.log(zebra/forest/unicorn);
	console.log('divided')
}


//create a function that multiplys three numbers and returns the product

function multiplier(num1, num2, num3){
	return Number(num1)*Number(num2)*Number(num3);
	console.log('multiplied')
}
*/

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function addTwoAndDivide (n1, n2, n3) {
	return (n1 + n2) % n3
}

console.log(addTwoAndDivide(3,3,2));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
