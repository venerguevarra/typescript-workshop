// 'Encapsulation' is used to make class members public or private
// i.e. a class can control the visibility of its data members. This is done using access modifiers.

// Example: public and private
class HardWorkingEmployee {
    public empCode: number;
    empName: string; // public by default
    private salary: number;
}

let hardWorkingEmp = new HardWorkingEmployee();
hardWorkingEmp.empCode = 123;
hardWorkingEmp.empName = "Swati";
hardWorkingEmp.salary = 20000; // Compilation Error

// protected access modifier is similar to the private access modifier,
// except that protected members can be accessed using their deriving classes.
class Employee {
    public empName: string;
    protected empCode: number;

    constructor(name: string, code: number){
        this.empName = name;
        this.empCode = code;
    }
}

class SalesEmployee extends Employee{
    private department: string;

    constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
    }
}

let empObj = new SalesEmployee("John Smith", 123, "Sales");
empObj.empCode; //Compiler Error

// Example: ReadOnly Class Properties
class AnotherEmployee {
    readonly empCode: number;
    empName: string;

    constructor(code: number, name: string)     {
        this.empCode = code;
        this.empName = name;
    }
}
let emp = new AnotherEmployee(10, "John");
emp.empCode = 20; //Compiler Error
emp.empName = 'Bill'; //Compiler Error

/*
Can also be declared in an interfacce
interface IEmployee {
    readonly empCode: number;
    empName: string;
}

let empObj:IEmployee = {
    empCode:1,
    empName:"Steve"
}

empObj.empCode = 100; // Compiler Error: Cannot change readonly 'empCode'
*/
