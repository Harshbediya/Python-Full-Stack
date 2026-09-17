// JavaScript Basics
// Run this file with Node.js or include it in an HTML file with a <script> tag.

// ---------------------------------------------------
// 1. Output
// ---------------------------------------------------

// console.log() prints a value in the console.
console.log("Hello, JavaScript!");

// ---------------------------------------------------
// 2. Variables: let, const, and var
// ---------------------------------------------------

// Use let when a value may change later.
let studentName = "Asha";
studentName = "Riya";

// Use const when a variable should not be reassigned.
const birthYear = 2005;

// var is the older way to declare variables. Prefer let and const in new code.
var oldVariable = "Legacy JavaScript";

console.log("Student:", studentName);
console.log("Birth year:", birthYear);
console.log("Old variable:", oldVariable);

// let and const are block-scoped.
{
	const blockMessage = "This is available only inside the block.";
	console.log(blockMessage);
}
// console.log(blockMessage); // Error: blockMessage is not defined

// ---------------------------------------------------
// 3. Data types
// ---------------------------------------------------

// String: text inside quotes.
const course = "Web Technology";

// Number: integer or decimal value.
const marks = 87.5;

// Boolean: true or false.
const hasPassed = true;

// Undefined: declared but no value has been assigned.
let futureValue;

// Null: intentionally empty value.
const emptyValue = null;

// BigInt: very large integer values. The n suffix is required.
const largeNumber = 12345678901234567890n;

// Symbol: a unique identifier.
const uniqueId = Symbol("student-id");

// Object: a collection of related values.
const student = { name: "Asha", age: 20 };

// Array: an ordered collection of values.
const subjects = ["HTML", "CSS", "JavaScript"];

console.log(typeof course); // string
console.log(typeof marks); // number
console.log(typeof hasPassed); // boolean
console.log(typeof futureValue); // undefined
console.log(typeof emptyValue); // object (this is a historical JavaScript behavior)
console.log(typeof largeNumber); // bigint
console.log(typeof uniqueId); // symbol
console.log(typeof student); // object
console.log(Array.isArray(subjects)); // true

// ---------------------------------------------------
// 4. Type conversion
// ---------------------------------------------------

// Convert a string to a number.
const numericText = "25";
const numericValue = Number(numericText);

// Convert a number to a string.
const scoreText = String(marks);

// Convert a value to a boolean.
const truthyValue = Boolean("JavaScript");

console.log(numericValue, scoreText, truthyValue);

// Number.isNaN() checks whether a result is Not-a-Number.
const invalidNumber = Number("hello");
console.log(Number.isNaN(invalidNumber)); // true

// ---------------------------------------------------
// 5. Operators
// ---------------------------------------------------

const firstNumber = 10;
const secondNumber = 3;

// Arithmetic operators.
console.log(firstNumber + secondNumber); // addition
console.log(firstNumber - secondNumber); // subtraction
console.log(firstNumber * secondNumber); // multiplication
console.log(firstNumber / secondNumber); // division
console.log(firstNumber % secondNumber); // remainder
console.log(firstNumber ** secondNumber); // exponent

// Comparison operators return true or false.
console.log(firstNumber > secondNumber);
console.log(firstNumber <= secondNumber);
console.log(firstNumber === 10); // strict equality: value and type
console.log(firstNumber !== 10);

// Prefer === and !== instead of == and != because they do not convert types.
console.log(5 === "5"); // false
console.log(5 == "5"); // true, type conversion occurs

// Logical operators.
const hasIdCard = true;
const isRegistered = true;
console.log(hasIdCard && isRegistered); // AND
console.log(hasIdCard || isRegistered); // OR
console.log(!hasIdCard); // NOT

// Assignment operators update a variable.
let counter = 5;
counter += 2;
counter -= 1;
counter *= 2;
counter /= 2;
console.log("Counter:", counter);

// The ternary operator is a short if...else expression.
const result = marks >= 40 ? "Pass" : "Fail";
console.log("Result:", result);

// ---------------------------------------------------
// 6. Conditional statements
// ---------------------------------------------------

const age = 20;

if (age >= 18) {
	console.log("The person is an adult.");
} else {
	console.log("The person is a minor.");
}

// else if checks more than two possible conditions.
const grade = 82;

if (grade >= 90) {
	console.log("Grade A+");
} else if (grade >= 75) {
	console.log("Grade A");
} else if (grade >= 60) {
	console.log("Grade B");
} else {
	console.log("Needs improvement");
}

// switch is useful when comparing one value with several fixed choices.
const day = 2;

switch (day) {
	case 1:
		console.log("Monday");
		break;
	case 2:
		console.log("Tuesday");
		break;
	default:
		console.log("Another day");
}

// ---------------------------------------------------
// 7. Loops
// ---------------------------------------------------

// for loop: use it when the number of repetitions is known.
for (let number = 1; number <= 5; number += 1) {
	console.log("For loop number:", number);
}

// while loop: repeats while its condition is true.
let countdown = 3;
while (countdown > 0) {
	console.log("Countdown:", countdown);
	countdown -= 1;
}

// do...while runs at least once before checking the condition.
let attempt = 1;
do {
	console.log("Attempt:", attempt);
	attempt += 1;
} while (attempt <= 2);

// break stops a loop early.
for (let number = 1; number <= 5; number += 1) {
	if (number === 4) {
		break;
	}
	console.log("Before break:", number);
}

// continue skips the current iteration.
for (let number = 1; number <= 5; number += 1) {
	if (number === 3) {
		continue;
	}
	console.log("After continue:", number);
}

// ---------------------------------------------------
// 8. Functions
// ---------------------------------------------------

// A function declaration can be called before its declaration in the file.
function greetUser(name) {
	return `Hello, ${name}!`;
}

console.log(greetUser("Asha"));

// Default parameters provide a value when an argument is missing.
function addNumbers(first = 0, second = 0) {
	return first + second;
}

console.log("Sum:", addNumbers(10, 5));
console.log("Default sum:", addNumbers());

// Function expression stores a function in a variable.
const multiplyNumbers = function (first, second) {
	return first * second;
};

console.log("Product:", multiplyNumbers(4, 3));

// Arrow functions are a shorter function syntax.
const square = (number) => number * number;
console.log("Square:", square(6));

// ---------------------------------------------------
// 9. Strings
// ---------------------------------------------------

const message = "  Learn JavaScript step by step  ";

console.log(message.length); // number of characters
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.trim()); // removes spaces at both ends
console.log(message.includes("JavaScript"));
console.log(message.startsWith("  Learn"));
console.log(message.endsWith("  "));
console.log(message.indexOf("JavaScript"));
console.log(message.slice(2, 6));
console.log(message.replace("step by step", "every day"));

// Template literals make it easy to insert variables into strings.
console.log(`My name is ${studentName} and I scored ${marks} marks.`);

// ---------------------------------------------------
// 10. Arrays
// ---------------------------------------------------

const colors = ["red", "green", "blue"];

console.log(colors[0]); // first item
console.log(colors[colors.length - 1]); // last item

// Add and remove items at the end.
colors.push("yellow");
const removedColor = colors.pop();

// Add and remove items at the beginning.
colors.unshift("black");
const firstColor = colors.shift();

console.log("Removed color:", removedColor);
console.log("First color:", firstColor);
console.log("Colors:", colors);

// for...of visits each array value.
for (const color of colors) {
	console.log("Color:", color);
}

// Common array methods return new arrays or values.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const total = numbers.reduce((sum, number) => sum + number, 0);

console.log("Doubled:", doubledNumbers);
console.log("Even numbers:", evenNumbers);
console.log("Total:", total);
console.log("Has number 3:", numbers.includes(3));

// ---------------------------------------------------
// 11. Objects
// ---------------------------------------------------

const book = {
	title: "JavaScript Basics",
	author: "Asha",
	pages: 120,
	isAvailable: true,
	describe() {
		return `${this.title} was written by ${this.author}.`;
	},
};

// Access object properties with dot notation or bracket notation.
console.log(book.title);
console.log(book["author"]);
console.log(book.describe());

// Objects declared with const can have their properties changed.
book.pages = 125;
book.category = "Education";
console.log(book);

// Object.keys(), Object.values(), and Object.entries() inspect an object.
console.log(Object.keys(book));
console.log(Object.values(book));
console.log(Object.entries(book));

// Destructuring copies selected properties into variables.
const { title, author } = book;
console.log("Title:", title, "Author:", author);

// ---------------------------------------------------
// 12. Error handling
// ---------------------------------------------------

try {
	// JSON.parse() throws an error when the text is not valid JSON.
	const parsedData = JSON.parse('{"topic":"JavaScript"}');
	console.log("Parsed data:", parsedData);
} catch (error) {
	console.log("An error occurred:", error.message);
} finally {
	console.log("The JSON example is complete.");
}

// ---------------------------------------------------
// 13. Date and Math objects
// ---------------------------------------------------

const currentDate = new Date();
console.log("Current year:", currentDate.getFullYear());
console.log("Random decimal:", Math.random());
console.log("Rounded number:", Math.round(4.6));
console.log("Largest number:", Math.max(10, 25, 7));
console.log("Smallest number:", Math.min(10, 25, 7));

// ---------------------------------------------------
// Summary
// ---------------------------------------------------
// JavaScript programs are built from values, variables, operators, conditions,
// loops, functions, arrays, and objects. Practice each section by changing the
// example values and observing the output in the console.
