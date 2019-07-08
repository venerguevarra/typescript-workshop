// TypeScript - Arrow Function
// Fat arrow notations are used for anonymous functions i.e for function expressions.
// They are also called lambda functions in other languages.

// Example: Parameterless Arrow Function
let printer = () => console.log("Hello TypeScript");
printer(); //Output: Hello TypeScript

let calculateForSum = (x: number, y: number): number => {
            return x + y;
}

calculateForSum(10, 20); //returns 30

// Example: Arrow Function in Class
class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
    }

    display = () => console.log(this.firstName +' ' + this.lastName)
}
let p = new Person('John', 'Doe');
p.display();