// start: Type Annotations
// - Javascript is not typed language vs Typescript is a typed language
var age: number = 32; // number variable
var customerName: string = "John";// string variable
var isUpdated: boolean = true;// Boolean variable

// Type Annotation of Parameters
function display(id:number, name:string) {
    console.log("Id = " + id + ", Name = " + name);
}

// Type Annotation in Object
var employee : {
    id: number;
    name: string;
};

// If you try to assign a string value to id then the TypeScript compiler will give the following error.
employee = {
  id: 100,
  name : "John"
}
console.log(employee);

// end: Type Annotations