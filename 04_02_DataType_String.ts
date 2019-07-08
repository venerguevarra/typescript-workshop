// String is a primitive data type that is used to store text data.
// String values are surrounded by single quotation marks or double quotation marks.

// let employeeName:string = 'John Smith';
//OR
let employeeName:string = "John Smith";

// Template String
let employeeDept:string = "Finance";

// Pre-ES6
let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department.";

// Post-ES6
let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`;

console.log(employeeDesc1);//John Smith works in the Finance department.
console.log(employeeDesc2);//John Smith works in the Finance department.

// string functions
// The charAt() method returns a character at the specified index from a string.
let str: string = 'Hello TypeScript';
str.charAt(0); // returns 'H'
str.charAt(2); // returns 'l'
"Hello World".charAt(2); // returns l

// The concat() method concatenates two or more specified strings.
let str1: string = 'Hello';
let str2: string = 'TypeScript';
str1.concat(str2); // returns 'HelloTypeScript'
str1.concat(' ', str2); // returns 'Hello TypeScript'
str1.concat(' Mr. ', 'Bond'); // returns 'Hello Mr. Bond'

// The indexOf() method returns an index of first occurrence of the specified sub string from a string.
// The index starts from 0. It returns -1 if not found.
// The indexOf() method search is case-sensitive.
let str3: string = 'TypeScript';

str3.indexOf('T'); // returns 0
str3.indexOf('p'); // returns 2
str3.indexOf('e'); // returns 3
str3.indexOf('T', 1); // returns -1
str3.indexOf('t', 1); // returns 9

// The replace() method replaces the matched substring with the specified string.
let str4: string = 'Hello Javascript';
let str5: string = 'TypeScript';

str4.replace('Java', 'Type'); // returns 'Hello TypeScript'
str4.replace('JavaScript', str5); // returns 'Hello TypeScript'
str4.replace(/Hello/gi, 'Hi'); // returns 'Hi TypeScript'

// The split() method splits a string into substrings based on a specified separator character
// and returns an array of substrings.
let str6: string = 'Apple, Banana, Orange';
let str7: string = ',';

str6.split(str7) // returns [ 'Apple', ' Banana', ' Orange' ]
str6.split(',') // returns [ 'Apple', ' Banana', ' Orange' ]
str6.split(',', 2) // returns [ 'Apple', ' Banana' ]
str6.split(',', 1) // returns [ 'Apple']

// The toUpperCase() method returns an upper case representation of the string
let typeString: string = 'Hello Typescript';
typeString.toUpperCase(); // returns 'HELLO TYPESCRIPT'
'hello typescript'.toUpperCase(); // returns 'HELLO TYPESCRIPT'

// The toLowerCase() method returns a lower case representation of the string
typeString.toLowerCase(); // returns hello typescript
'HELLO TYPESCRIPT'.toLowerCase(); // returns hello typescript

// Boolean values are supported by both JavaScript and TypeScript and stored as true/false values.
let isPresent:boolean = true;