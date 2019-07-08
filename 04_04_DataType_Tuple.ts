// Tuple is a new data type which includes two set of values of different data types.

// Example: Tuple vs Other Data Types
var empId: number = 1;
var empName: string = "Steve";

// Tuple type variable
var employee: [number, string] = [1, "Steve"];
var person: [number, string, boolean] = [1, "Steve", true];

var user: [number, string, boolean, number, string];// declare tuple variable
user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable

// Example: Tuple Array
var employees: [number, string][];
employees = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

// Accessing Tuple Elements
employee[0]; // returns 1
employee[1]; // returns "Steve"
// Add Elements into Tuple
var employeeTuple: [number, string] = [1, "Steve"];
employeeTuple.push(2, "Bill");
console.log(employeeTuple); //Output: [1, 'Steve', 2, 'Bill']

employeeTuple.push(true); // Argument of type 'true' is not assignable to parameter of type 'number | string'.