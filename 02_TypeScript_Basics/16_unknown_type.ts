/* Unknown Types 
================= */

let userInput: unknown;
let userName: string;
let userName_2: string;

userInput = "Daniel";
userInput = true;
userInput = 45;

userInput = "Hello world";

console.log(userInput);

//---

// userName = userInput; // X Incorrect
// console.log(userName);

//---
if (typeof userInput == "string") {
  userName_2 = userInput;
  console.log(userName_2);
}
