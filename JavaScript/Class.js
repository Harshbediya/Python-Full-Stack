// // JavaScript Basics: var keyword and scope
// // This file shows how var behaves inside and outside blocks and functions.

// // 1. Simple variable declaration
// var b = 10;
// console.log("Value of b:", b);

// // 2. Variable initialization and re-initialization
// var insti = "Hellooo";
// console.log("Initial value of insti:", insti);

// insti = "Hello again";
// console.log("Updated value of insti:", insti);

// // ---------------------------------------------------
// // BLOCK SCOPE EXAMPLES with var
// // ---------------------------------------------------

// // Example A: variable declared outside block and accessed inside block
// var place = "Bangalore";
// {
//   console.log("Inside block: value of place is", place);
// }
// console.log("Outside block: value of place is", place);

// // Example B: variable declared inside block and accessed outside block
// {
//   var city = "Pune";
//   console.log("Inside block: value of city is", city);
// }
// console.log("Outside block: value of city is", city);

// // Explanation:
// // var is NOT block-scoped.
// // A variable declared with var inside a block can still be used outside that block.

// // ---------------------------------------------------
// // FUNCTION SCOPE EXAMPLES with var
// // ---------------------------------------------------

// // Example C: variable declared outside function and accessed inside function
// var country = "India";

// function displayCountry() {
//   console.log("Inside function: value of country is", country);
// }

// displayCountry();
// console.log("Outside function: value of country is", country);

// // Example D: variable declared inside function and accessed outside function
// function displayCity() {
//   var state = "Maharashtra";
//   console.log("Inside function: value of state is", state);
// }

// displayCity();

// // console.log("Outside function: value of state is", state);
// // This line would cause an error because state is function-scoped and not available outside the function.

// // Explanation:
// // var is function-scoped.
// // A variable declared inside a function cannot be accessed outside that function.

// // ---------------------------------------------------
// // Final note
// // var can be used inside and outside blocks/functions, but it behaves differently from let and const.
// // Modern JavaScript prefers let and const because they are block-scoped.



// let place = "Bangalore";
// {
 
// }
// console.log("Outside block: value of place is", place);

// {
//   let city = "Pune";
// } 
// console.log("Outside block: value of city is", city);


let country = "India";

function displayCountry() {
  console.log("Inside function: value of country is", country);
}

displayCountry();
console.log("Outside function: value of country is", country);


// function displayCity() {
//   let state = "Maharashtra";
//   console.log("Inside function: value of state is", state);
// }

// displayCity();

// console.log("Outside function: value of state is", state);




// const is block-scoped and function-scoped.
// A const variable can be used outside a block only if it was declared outside that block.

// const place = "Bangalore";

// // Here, place is accessible because it is declared outside the block.
// {
//   console.log("Inside block: value of place is", place);
// }

// // This is also valid because place was declared outside the block.
// console.log("Outside block: value of place is", place);

// // city is declared inside this block, so it cannot be used outside.
// {
//   const city = "Pune";
//   console.log("Inside block: value of city is", city);
// }

// // This will give an error because city is block-scoped.
// // console.log("Outside block: value of city is", city);

// // country is declared outside the function, so it can be used inside the function.
// const country = "India";

// function displayCountry() {
//   console.log("Inside function: value of country is", country);
// }

// // This works because country is outside the function.
// displayCountry();
// console.log("Outside function: value of country is", country);

// // state is declared inside the function, so it cannot be used outside.
// function displayCity() {
//   const state = "Maharashtra";
//   console.log("Inside function: value of state is", state);
// }

// displayCity();

// This will give an error because state is function-scoped.
// console.log("Outside function: value of state is", state);