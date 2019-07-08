// TypeScript - Function Overloading
// Multiple functions with the same name but different parameter types and return type.
// However, the number of parameters should be the same.

//Example: Function Overloading
function add(a:string, b:string):string;

function add(a:number, b:number): number;

function add(a: any, b:any): any {
    return a + b;
}

add("Hello ", "Steve"); // returns "Hello Steve"
add(10, 20); // returns 30