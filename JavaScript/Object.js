
//Create Object in JS

let personalDetails={
    Name:"Hello",
    age:22,
    gendar:"male",
    contact:65346,
    isAvailabl:true
}
console.log(personalDetails)
console.log(typeof(personalDetails))

// add new pair (key & value ) to the existing Object
personalDetails.email="hello132@gmail.com"
console.log("updating Object:",personalDetails)

// Updating the value 
personalDetails.isAvailable=false
console.log(personalDetails)

//Delete the item

delete personalDetails.email
console.log(personalDetails);

// ! string interpolation !
let Name="sita"
let gendar="female"
console.log(`My name is ${Name} and i'm ${gendar}`)

// fetching the value
console.log(personalDetails.gendar)
console.log(`${personalDetails.Name} gendar is ${personalDetails.gendar}`);


