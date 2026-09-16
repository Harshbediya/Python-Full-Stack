// JavaScript: let and const scope examples
// This file shows how let and const behave inside and outside blocks and functions.

// ---------------------------------------------------
// 1. let - block scoped
// ---------------------------------------------------

// Example 1: let declared outside block and accessed inside block
let city = "Pune";
{
  console.log("Inside block, city =", city);
}
console.log("Outside block, city =", city);

// Example 2: let declared inside block and accessed outside block
{
  let state = "Maharashtra";
  console.log("Inside block, state =", state);
}
// console.log(state); // Error: state is not defined

// Explanation:
// let is block-scoped.
// A variable declared with let inside a block cannot be used outside that block.

// ---------------------------------------------------
// 2. const - block scoped and constant
// ---------------------------------------------------

// Example 3: const declared outside block and accessed inside block
const country = "India";
{
  console.log("Inside block, country =", country);
}
console.log("Outside block, country =", country);

// Example 4: const declared inside block and accessed outside block
{
  const pinCode = 411001;
  console.log("Inside block, pinCode =", pinCode);
}
// console.log(pinCode); // Error: pinCode is not defined

// Explanation:
// const is also block-scoped.
// A variable declared with const inside a block cannot be used outside that block.

// Important:
// const cannot be reassigned.
// const name = "Amit";
// name = "Rahul"; // Error

// ---------------------------------------------------
// 3. let inside function and outside function
// ---------------------------------------------------

// Example 5: let declared outside function and accessed inside function
let user = "Riya";

function showUser() {
  console.log("Inside function, user =", user);
}

showUser();
console.log("Outside function, user =", user);

// Example 6: let declared inside function and accessed outside function
function showAge() {
  let age = 21;
  console.log("Inside function, age =", age);
}

showAge();
// console.log(age); // Error: age is not defined

// Explanation:
// let is function-scoped too.
// A variable declared inside a function cannot be accessed outside the function.

// ---------------------------------------------------
// 4. const inside function and outside function
// ---------------------------------------------------

// Example 7: const declared outside function and accessed inside function
const school = "ABC School";

function showSchool() {
  console.log("Inside function, school =", school);
}

showSchool();
console.log("Outside function, school =", school);

// Example 8: const declared inside function and accessed outside function
function showRollNumber() {
  const rollNo = 12;
  console.log("Inside function, rollNo =", rollNo);
}

showRollNumber();
// console.log(rollNo); // Error: rollNo is not defined

// Explanation:
// const is also function-scoped.
// A variable declared inside a function cannot be used outside that function.

// ---------------------------------------------------
// 5. Summary
// ---------------------------------------------------
// let and const are block-scoped.
// They can be accessed outside a block only if they were declared outside it.
// They are function-scoped too.
// A variable declared inside a function cannot be accessed outside that function.
// const cannot be reassigned, but objects and arrays declared with const can still be modified.

const student = { name: "Asha", age: 20 };
student.age = 21; // allowed because object property value is changed
console.log("Updated student object:", student);

// Note:
// This is valid because we are changing the property inside the object, not reassigning the whole const variable.
