//Activating strict mode to enable more secure code
//it also helps prevent certain bugs by alerting you using visible errors instead of "failing silently"
// "use strict"; //Must be the very first statement at the beginning of the script (comments are okay to come before it) should always use strict mode

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true; //strict mode should help us avoid errors like this
// if (hasDriversLicense) console.log("I can drive");

//Strict mode also reserves some variable words ahead of time to anticipate them being used.
// const interface = "Audio";
// const private = 534;
//const if //Same reason why you can't use the word 'if' as a variable name

//--- FUNCTIONS ---
// function logger() {
//   console.log("My name is Alec");
// }

// //calling, running, or invoking the function all mean the same thing
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 5));

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

//--- FUNCTION DECLARATIONS VS EXPRESSIONS ---

//Function Declaration - You can call them in code before they're defined
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1999);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// //Function Expression - You will produce errors when attempting the call the function before it is initialized
// const age2 = calcAge2(1999);
// console.log(age1, age2);

// //--- ARROW FUNCTIONS ---
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear) => {
//   //When needing to write multiple lines of code in an arrow function, you have to use curly braces
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement; //With multiple lines of code in an arrow function, you still have to use the return keyword, otherwise the arrow would usually return it for us when using just one line of code
// };

// console.log(`I only have ${yearsUntilRetirement(1999)} years until I retire`);

//--- FUNCTIONS CALLING OTHER FUNCTIONS ---
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

//---INTRODUCTION TO ARRAYS ---

// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay"); //.push will also return the length of the new array. We can store it into a variable for later use if we want
// console.log(friends);
// console.log(newLength);

// friends.unshift("John"); //should add a value to the beginning of an array
// console.log(friends);

// //Removing Elements
// const popped = friends.pop(); //Last element
// console.log(popped);
// console.log(friends);

// friends.shift(); //Removes the first element of an array
// console.log(friends);

// console.log(friends.indexOf("bob")); //Will return -1 when it can't find the index of the array you request

// console.log(friends.includes("Steven")); //.includes uses strict equality i.e. does not use type coercion
// console.log(friends.includes("Bob"));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

//---INTRODUCTION TO OBJECTS ---
//Objects are better for organizing data that is unstructured in nature
// const alec = {
//   firstName: "Alec",
//   lastName: "Somers", //These are all properties. Each property has a key value pair.
//   age: 2037 - 1999,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// }; //Objects must have semi-colon after the closing curly brace

// //Dot vs. Bracket Notation to retrieve elements from object
// console.log(alec.firstName);
// console.log(alec["age"]);

// const nameKey = "Name";
// console.log(alec["first" + nameKey]); //Any expression can be used in bracket notation. This would be prohibited using dot notation
// console.log(alec["first" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about alec? Choose between firstName, lastName, age, job, and friends"
// );
// console.log(interestedIn);
// console.log(alec[interestedIn]);

// if (alec[interestedIn]) {
//   console.log(alec[interestedIn]);
// } else {
//   console.log("You chose a value that does not exist");
// }

//Adding elements to an object
// alec.location = "Washington";
// alec["twitter"] = "@alec_somers";
// console.log(alec);

// //Challenge
// //Alec has 3 friends, and his best friend is Michael
// const myFirstName = alec.firstName;
// const numOfFriends = alec.friends.length;
// const bestFriend = alec.friends[0];
// console.log(
//   `${myFirstName} has ${numOfFriends} friends, and his best friend is called ${bestFriend}`
// );

//--- OBJECT METHODS ---
// const alec = {
//   firstName: "Alec",
//   lastName: "Somers",
//   birthYear: 1999,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   //   calcAge: function (birthYear) {
//   //     //Any function that is attached to an object is called a method. This is how you would make a method for an object using to code to the left of this line
//   //     return 2037 - birthYear;
//   //   }, This one would work

//   //   function calcAge(birthYear) {
//   //     return 2037 - birthYear;
//   //   } This wouldn't be able to work within an object because it's not a function value, it's a function declaration

//   calcAge: function () {
//     return 2037 - this.birthYear;
//   }, //Using the 'this' keyword, everytime you use the function no matter what object it is in, it will always point to the object that it is located in, allowing for reusability

//   getSummary: function () {
//     return `${this.firstName} is a ${2037 - this.birthYear} year old ${
//       this.job
//     }, and has ${this.hasDriversLicense ? "a" : "no"}
//     driver's license.`;
//   },
// };

// // console.log(alec.calcAge(alec.birthYear)); //It would be ideal to use the birthYear that is already in the object to maintain good code reusability practices,.
// // console.log(alec["calcAge"](1991)); //Since calcAge is technically a property, it needs to wrapped in quotes when using bracket notation to call a method

// console.log(alec.calcAge());

// //Challenge
// //"Alec is a 38 year old teacher, and he has a(no) driver's license"
// console.log(alec.getSummary());

for (let rep = 1; rep <= 10; rep++) {
  console.log("Lifting weights repetition " + rep);
}
