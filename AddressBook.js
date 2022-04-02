
console.log("...Welcome to address book problem...");

const Person = require("./Person.js");
const prompt = require('prompt-sync')();

//to add person details in address book
var add = new Person();
add.firstName = prompt("Enter First Name : ");
add.lastName = prompt("Enter Last Name : ");
add.address = prompt("Enter Address : ");
add.city = prompt("Enter City : ");
add.state = prompt("Enter State : ");
add.zip = prompt("Enter Zip : ");
add.phoneNumber = prompt("Enter Phone Number : ");
add.email = prompt("Enter Email : ");
console.log(add.toString());