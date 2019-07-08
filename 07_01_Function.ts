// Functions are the primary blocks of any program.
// In JavaScript, functions are the most important part since the
// JavaScript is a functional programming language.

// Functions ensure that the program is maintainable and reusable, and organized into readable blocks.

// Named Functions
// A named function is one where you declare and call a function by its given name.

function display() {
    console.log("Hello TypeScript!");
}
display(); //Output: Hello TypeScript

// Example: Function with Parameter and Return Types
function sum(x: number, y: number) : number {
    return x + y;
}
sum(2,3); // returns 5

// Example: Anonymous Function
let greeting = function() {
    console.log("Hello TypeScript!");
};
greeting(); //Output: Hello TypeScript!

// Example: Function with Paramter and Return Types
let Sum = function(x: number, y: number) : number
{
    return x + y;
}
Sum(2,3); // returns 5

// Optional Parameters
// The parameters that may or may not receive a value can be appended with a '?' to mark them as optional.
// Example: Optional Parameter
function Greet(greeting: string, name?: string ) : string {
    return greeting + ' ' + name + '!';
}

Greet('Hello','Steve');//OK, returns "Hello Steve!"
Greet('Hi'); // OK, returns "Hi undefined!".
Greet('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.

// Default Parameters
function Greet(name: string, greeting: string = "Hello") : string {
    return greeting + ' ' + name + '!';
}

Greet('Steve');//OK, returns "Hello Steve!"
Greet('Steve', 'Hi'); // OK, returns "Hi Steve!".
Greet('Bill'); //OK, returns "Hello Bill!"