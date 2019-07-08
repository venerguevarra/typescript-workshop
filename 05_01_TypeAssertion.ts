// Type assertion allows you to set the type of a value and tell the compiler not to infer it.
let myCode: any = 123;
let employeeCode = <number> myCode;
console.log(typeof(employeeCode)); //Output: number

// Using as keyword
let thisCode: any = 123;
let thatCode = thisCode as number;