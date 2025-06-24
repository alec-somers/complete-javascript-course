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
