// Union allows the use more than one data type for a variable or a function parameter

// Example: Union
let code: (string | number);
code = 123;   // OK
code = "ABC"; // OK
code = false; // Compiler Error

let employeeId: string | number;
employeeId = 111; // OK
employeeId = "E111"; // OK
employeeId = true; // Compiler Error

// Example: Function Parameter as Union Type
function displayType(code: (string | number))
{
    if(typeof(code) === "number")
        console.log('Code is number.')
    else if(typeof(code) === "string")
        console.log('Code is string.')
}

displayType(123); // Output: Code is number.
displayType("ABC"); // Output: Code is string.
displayType(true); //Compiler Error: Argument of type 'true' is not assignable to a parameter of type string | number
