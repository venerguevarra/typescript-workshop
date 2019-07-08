// Pass zero or more arguments to the rest parameter.
// The compiler will create an array of arguments with the provided rest parameter name.

// Example: Rest Parameters
function greetSomeone(greeting: string, ...names: string[]) { //rest parameters must come last in the function defination
    return greeting + " " + names.join(", ") + "!";
}

greetSomeone("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"

greetSomeone("Hello");// returns "Hello !"