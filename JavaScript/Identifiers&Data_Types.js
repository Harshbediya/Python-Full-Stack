// JavaScript: Identifiers and Data Types
// This file explains the basic concepts of identifiers and data types in JavaScript.

// ---------------------------------------------------
// 1. Identifiers
// ---------------------------------------------------
// An identifier is the name given to variables, functions, classes, or labels.
// It is used to identify or refer to a memory location or block of code.

// Important rules for identifiers:
// 1. Can contain letters, digits, underscores (_), and dollar signs ($).
// 2. Cannot start with a digit.
// 3. Cannot use JavaScript reserved keywords like var, let, const, if, else, etc.
// 4. JavaScript is case-sensitive, so Name and name are different.
// 5. Use meaningful names to make code readable.

let studentName = "Asha"; // valid identifier
let $price = 500; // valid identifier
let _count = 10; // valid identifier
// let 2ndName = "Riya"; // invalid because it starts with a digit

// Good naming examples:
let totalMarks = 450;
let studentAge = 20;

// ---------------------------------------------------
// 2. Data Types in JavaScript
// ---------------------------------------------------
// JavaScript has two main categories of data types:
// 1. Primitive data types
// 2. Non-primitive (reference) data types

// Primitive data types are simple values stored directly in memory.

// String: text data enclosed in single or double quotes.
let name = "Riya";
let city = 'Pune';

// Number: integer or floating-point values.
let age = 18;
let marks = 87.5;

// Boolean: true or false values.
let isPassed = true;
let isActive = false;

// Undefined: variable declared but no value assigned.
let result;

// Null: explicitly empty or no value.
let emptyValue = null;

// BigInt: used for very large integer values.
let bigNumber = 12345678901234567890n;

// Symbol: unique and immutable value.
let uniqueId = Symbol("id");

// Non-primitive data types:
// Objects and arrays are reference types.

// Object: stores multiple related values in key-value pairs.
let student = {
  name: "Asha",
  age: 20,
  course: "Web Technology"
};

// Array: ordered collection of values.
let subjects = ["HTML", "CSS", "JavaScript"];

// ---------------------------------------------------
// 3. typeof Operator
// ---------------------------------------------------
// typeof is used to check the type of a value.
console.log(typeof name);       // string
console.log(typeof age);        // number
console.log(typeof isPassed);   // boolean
console.log(typeof result);     // undefined
console.log(typeof emptyValue); // object
console.log(typeof bigNumber);  // bigint
console.log(typeof uniqueId);   // symbol
console.log(typeof student);    // object
console.log(Array.isArray(subjects)); // true

// ---------------------------------------------------
// 4. Important Points
// ---------------------------------------------------
// - JavaScript is dynamically typed, so a variable can hold different data types.
// - const is used for constant values that should not be changed.
// - let is used for variables that may change later.
// - var is older and should be avoided in modern JavaScript.
// - use meaningful names for better readability and maintainability.
// - always avoid using keywords, spaces, and invalid syntax in identifiers.

let score = 90; // variable can be reassigned
score = 95;

const PI = 3.14; // constant value
// PI = 3.1416; // Error: cannot reassign a constant

// ---------------------------------------------------
// 5. Example Program
// ---------------------------------------------------
console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Passed:", isPassed);
console.log("Object:", student);
console.log("Subjects:", subjects);

// ---------------------------------------------------
// Summary
// ---------------------------------------------------
// Identifiers are names used to refer to variables and functions.
// Data types define the kind of value stored in a variable.
// Understanding both helps us write correct and readable JavaScript code.
