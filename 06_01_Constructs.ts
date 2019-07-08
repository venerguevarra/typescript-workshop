// TypeScript - if else

let x: number = 10, y = 20;

if (x > y) {
  console.log("x is greater than y.");
} else if (x < y) {
  console.log("x is less than y."); //This will be executed
} else if (x == y) {
  console.log("x is equal to y");
}

// Ternary operator
x > y? console.log('x is greater than y.'): console.log('x is less than or equal to y.')

// TypeScript - switch
// Example: switch
let theDay : number = 4;

switch (theDay) {
    case 0:
        console.log("It is a Sunday.");
        break;
    case 1:
        console.log("It is a Monday.");
        break;
    case 2:
        console.log("It is a Tuesday.");
        break;
    case 3:
        console.log("It is a Wednesday.");
        break;
    case 4:
        console.log("It is a Thursday.");
        break;
    case 5:
        console.log("It is a Friday.");
        break;
    case 6:
        console.log("It is a Saturday.");
        break;
    default:
        console.log("No such day exists!");
        break;
}

// Example: for Loop
for (let i = 0; i < 3; i++) {
  console.log ("Block statement execution no." + i);
}

// for...of Loop
// TypeScript includes the for...of loop to iterate and access elements of
// an array, list, or tuple collection
//Example: for..of Loop
let thatArr = [10, 20, 30, 40];

for (var val of thatArr) {
  console.log(val); // prints values: 10, 20, 30, 40
}

let helloWorld = "Hello World";

for (var char of helloWorld) {
  console.log(char); // prints chars: H e l l o  W o r l d
}

// The for...in loop iterates through a list or collection and returns an index on each iteration.
// Example: for..in Loop
let thisArr = [10, 20, 30, 40];

for (var index in thisArr) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(arr[index]); // prints elements: 10, 20, 30, 40
}

//Example: while loop
let thisVar: number = 2;

while (thisVar < 4) {
    console.log( "Block statement execution no." + thisVar );
    thisVar++;
}