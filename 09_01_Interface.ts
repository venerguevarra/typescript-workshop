// Interface is a structure that defines the contract in your application.
// It defines the syntax for classes to follow.
// Classes that are derived from an interface must follow the structure provided by their interface.

// Example: Interface
interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (number) => number; // arrow function
    getManagerName(number): string;
}

// Example: Interface as Type
interface KeyPair {
    key: number;
    value: string;
}

let kv1: KeyPair = { key:1, value:"Steve" }; // OK
let kv2: KeyPair = { key:1, val:"Steve" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'
let kv3: KeyPair = { key:1, value:100 }; // Compiler Error:

// Example: Optional Property
interface IEmployee2 {
    empCode: number;
    empName: string;
    empDept?:string;
}

let empObj2:IEmployee2 = {   // OK
    empCode:1,
    empName:"Steve"
}

let empObj3:IEmployee2 = {    // OK
    empCode:1,
    empName:"Bill",
    empDept:"IT"
}

// Example: Readonly Property
interface Citizen {
    name: string;
    readonly SSN: number;
}

let personObj: Citizen  = { SSN: 110555444, name: 'James Bond' };
personObj.name = 'Steve Smith'; // OK
personObj.SSN = '333666888'; // Compiler Error


// Example: Interface Implementation
interface ThisIEmployee {
    empCode: number;
    name: string;
    getSalary:(number)=>number;
}


class ContractualEmployee implements ThisIEmployee {
    empCode: number;
    name: string;

    constructor(code: number, name: string) {
        this.empCode = code;
        this.name = name;
    }

    getSalary(empCode:number):number {
        return 20000;
    }
}

let contractualEmployee = new ContractualEmployee(1, "Steve");