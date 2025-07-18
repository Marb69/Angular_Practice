
/*Primitive Data types*/
/*String*/
let string = 'This is a String';
console.log(` => ${string}`);
/*Integer - Number or Floating point*/
let number = 49;
console.log(`Number => ${number}`);
let floatingPoint = 49.2;
console.log(`Float => ${floatingPoint}`);
/*BigInt Represents integers of arbitrary precision (Large number)*/

let numberBig = 123334455;
console.log(`BigInt => ${numberBig}`);
/*Boolean*/

let True = true;
console.log(`Truthy => ${True}`);
let False = false;
console.log(`falsy => ${false}`);
/*Undefined*/
let x;
console.log(`Undefined => ${x}`);
/*Null */

let y = null;
console.log(`Null => ${y}`);
/*Symbol*/

/*Non-Primitive Data Types*/

/*Object*/
let obj = { name: "John", age: 30 };

console.log(`This is a objetc => Name: ${obj.name} Age: ${obj.age}`);
/*Array*/


let arr = [1, 2, 3];

for(let i = 0; arr.length>i; i++){

    console.log(`They are the data of array => ${arr[i]}`);
}

/*Function*/

function greet() {
  console.log("Hello!");
}

greet();


