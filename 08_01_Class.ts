/*
In ECMAScript 6, object-oriented class based approach was introduced.
TypeScript introduced classes to avail the benefit of object-oriented
techniques like encapsulation and abstraction.
The class in TypeScript is compiled to plain JavaScript functions
by the TypeScript compiler to work across platforms and browsers.

A class can include the following:
    - Constructor
    - Properties
    - Methods
*/

// Example: Class
class Employee {
    empCode: number;
    empName: string;

    // the constructor method is always defined with the name "constructor"
    constructor(code: number, name: string) {
        // members of the class can be accessed using this keyword
        this.empName = name;
        this.empCode = code;
    }

    getSalary() : number {
        return 10000;
    }
}

// Creating an Object of Class
let emp = new Employee(100, 'John Doe');

// Example: Inheritance
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class RegularyEmployee extends Person {
    empCode: number;

    constructor(empcode: number, name:string) {
        // We must call super() method first before assigning values
        // to properties in the constructor of the derived class.
        super(name);
        this.empCode = empcode;
    }

    displayName():void {
        console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
    }
}

let regularEmployee = new RegularyEmployee(100, "Bill");
regularEmployee.displayName(); // Name = Bill, Employee Code = 100

// Example: Method Overriding
class Car {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    run(speed:number = 0) {
        console.log("A " + this.name + " is moving at " + speed + " mph!");
    }
}

class Mercedes extends Car {

    constructor(name: string) {
        super(name);
    }

    run(speed = 150) {
        console.log('A Mercedes started')
        super.run(speed);
    }
}

class Honda extends Car {

    constructor(name: string) {
        super(name);
    }

    run(speed = 100) {
        console.log('A Honda started')
        super.run(speed);
    }
}

let mercObj = new Mercedes("Mercedes-Benz GLA");
let hondaObj = new Honda("Honda City");