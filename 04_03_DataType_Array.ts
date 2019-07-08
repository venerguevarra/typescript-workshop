//TypeScript Data Type - Array

// An array is a special type of data type which can store
// multiple values of different data types sequentially using a special syntax.

// 1. Using square brackets.
// let fruits: string[] = ['Apple', 'Orange', 'Banana'];

// 2. Using a generic array type, Array<elementType>
// let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];

// Example: Array Declaration and Initialization
let fruits: Array<string>;
fruits = ['Apple', 'Orange', 'Banana'];

let ids: Array<number>;
ids = [23, 34, 100, 124, 44];

// An array in TypeScript can contain elements of different
// data types using a generic array type syntax, as shown below.
let values: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana'];

// Example: Access Array Elements
fruits[0]; // returns Apple
fruits[1]; // returns Orange
fruits[2]; // returns Banana
fruits[3]; // returns undefined

// Access Array Elements using Loop
for(var index in fruits) {
    console.log(fruits[index]);  // output: Apple Orange Banana
}

for(var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // output: Apple Orange Banana
}

// Example: Array Methods
fruits.sort();
console.log(fruits); //output: [ 'Apple', 'Banana', 'Orange' ]

console.log(fruits.pop()); //output: Orange

fruits.push('Papaya');
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya']

fruits = fruits.concat(['Fig', 'Mango']);
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya', 'Fig', 'Mango']

console.log(fruits.indexOf('Papaya'));//output: 2