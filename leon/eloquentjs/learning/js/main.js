const askPrice = prompt("enter the price:");

let taxPrice = askPrice * 1.206;

console.log(taxPrice)





/*let counter = 1;
let printedNumber = 0;
while (counter <= 100){

printedNumber = printedNumber + 1;

  if (printedNumber % 3 === 0 && (printedNumber % 5 === 0)) {
    console.log('FizzBuzz');
  }
  else if (printedNumber % 3 === 0) {
    console.log('Fizz');
  }
  if (printedNumber % 5 === 0) {
    console.log('Buzz');
  }
  else{
    console.log(printedNumber);
  }

  counter = counter + 1
}

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4




let a = 2;
a -= 1;
a++; //2
let b = 8;
b += 2;//10
const c = a + b * b; //102
const d = a * b + b;//30
const e = a * (b + b);//40
const f = a * b / a;//10
const g = b / a * a;//10
console.log(a, b, c, d, e, f, g);//


*/