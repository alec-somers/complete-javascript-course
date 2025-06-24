// const firstName = "Alec";
// const job = "teacher";
// const birthYear = 1991;
// const currentYear = 2037;

// const alec =
//   "I'm " + firstName + ", a " + (currentYear - birthYear) + " year old " + job;

// console.log(alec);

// const alecNew = `I'm ${firstName}, a ${currentYear - birthYear} old ${job}`;
// console.log(alecNew);

// //You can use backticks for any regular string which is a regular practice
// console.log(`Just a regular string...`);

// //Here is an example of a multi line string
// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// //Here is an easier way to do this. MUCH BETTER and cleaner
// console.log(`String
// multiple
// lines`);

// const age = 15;

// if (age >= 18) {
//   console.log("You are old enough to drive");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`You are too young. You have to wait ${yearsLeft} more years`);
// }

//---TYPE CONVERSION AND COERCION (TYPECASTING)---

//--Type conversion--
// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number("alec"));
// console.log(typeof NaN);

// console.log(String(23));
// console.log(23);

// //--Type Coercion-- (Using multiple types of data in one line of code. This is possible
// //because of type coercion)
// console.log("I am " + 23 + " years old");
// //Javascript will convert strings to numbers when using the subtraction operator
// //If you were to use the add operator, Javascript will convert everything to strings
// //and concantenate them
// console.log("23" - "10" - 3);

// let n = "1" + 1;
// n = n - 1;
// console.log(typeof n);

//---TRUTHY AND FALSY VALUES---

//Javascript has 5 falsy values: 0, "", undefined, null, NaN

// console.log(Boolean(0)); //shoul evaluate to false
// console.log(Boolean(undefined));
// console.log(Boolean("Alec"));
// console.log(Boolean({}));
// // Boolean converter is rarely ever used. Javascript will usually do this type coercion implicitly

// const money = 100;
// if (money) {
//   //Javascript will try to convert it to a boolean using the truthy/falsy rules
//   console.log("Don't spend it all");
// } else {
//   console.log("You should get a job!");
// }

// //Testing if something is undefined(exists) or not
// let height = 0;
// if (height) {
//   //Will evaluate to false since height is undefined which is a falsy value
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

//---EQUALITY OPERATORS == VS === ---
//the === doesn't perform type coercion. The == does perform type coercion
// const age = 18;
// if (age === 18) console.log("You just became an adult");

// console.log("18" == 18); //Will evaluate to true since type coercion will convert the string into a number

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);

// if (favorite === 23) {
//   console.log("Cool! 23 is an amazing number");
// }

// if (favorite !== 23) console.log("Why not the 23?");

// //--- SWITCH STATEMENT --- When you want to compare one value to multiple different options
// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday": //Since wednesday and thursday are idented the same, the code below them will execute for both of
//     //these cases
//     console.log("I write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day");
// }

//--- TERNARY OPERATOR ---
const age = 23;
const canDrink = age >= 18 ? "wine" : "water"; //Much easier to use vs. a normal if else code block
console.log(canDrink);

let drink2;

if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
