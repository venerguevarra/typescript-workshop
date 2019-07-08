// Variable
// var Declaration
// Variables in TypeScript can be declared using var keyword, same as in JavaScript.
// The scoping rules remains the same as in JavaScript.
var hoistedVariable = 'I am on top of the world!';
// Example: var Variables Scope
var num1:number = 1;

function varDeclaration() {
    var num2:number = 2;

    if (num2 > num1) {
        var num3: number = 3;
        num3++;
    }

    while(num1 < num2) {
        var num4: number = 4;
        num1++;
    }

    console.log(num1); //2
    console.log(num2); //2
    console.log(num3); //4
    console.log(num4); //4
}

varDeclaration();

// Variable Declaration using let
// let employeeName = "John"; or
let employeeName:string = "John";
// Example: let Variables Scope
function letDeclaration() {
    let num2:number = 2;

    if (num2 > num1) {
        let num3: number = 3;
        num3++;
    }

    while(num1 < num2) {
        let num4: number = 4;
        num1++;
    }

    console.log(num1); //OK
    console.log(num2); //OK
    console.log(num3); //Compiler Error: Cannot find name 'num3'
    console.log(num4); //Compiler Error: Cannot find name 'num4'
}
letDeclaration();

// Example: let vs var
//
console.log(letVariable); // Compiler Error: error TS2448: Block-scoped variable 'num' used before its declaration
let letVariable:number = 10 ;

console.log(varVariable); // OK, Output: undefined
var varVariable:number = 10 ;

// Variable that was already passed in as an argument to the function
function letDemo(a: number ) {
    let a:number = 10 ; //Compiler Error: TS2300: Duplicate identifier 'a'
    let b:number = 20 ;

    return a + b ;
}

// Const Declaration
// - Const variables must be declared and initialized in a single statement
// - Separate declaration and initialization is not supported.
const constantVar:number = 100;
constantVar = 200; //Compiler Error: Cannot assign to 'constantVar' because it is a constant or read-only property

// Const variables allow an object sub-properties to be changed but not the object structure.
const playerCodes = {
    player1 : 9,
    player2 : 10,
    player3 : 13,
    player4 : 20
};
playerCodes.player2 = 11; // OK

playerCodes = {     //Compiler Error: Cannot assign to playerCodes because it is a constant or read-only
    player1 : 50,   // Modified value
    player2 : 10,
    player3 : 13,
    player4 : 20
};

// Type Inference in TypeScript
var a = "some text";
var b = 123;
a = b; // Compiler Error: Type 'number' is not assignable to type 'string'