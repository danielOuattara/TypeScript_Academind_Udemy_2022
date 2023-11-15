// export {};

const paragraph = document.querySelector("p")!; // over me
paragraph.innerHTML = "Hello";

const paragraph2 = document.getElementById("message-output"); // over me

const userInput2 = document.getElementById("user-input"); // over me

//----------------------------------------

/*  use type casting to be more specific */

// method 1
const paragraph3 = <HTMLParagraphElement>document.getElementById("message"); // over me
const userInput3 = <HTMLInputElement>document.getElementById("user-input"); // over me

// method 2
const paragraph4 = document.getElementById("message") as HTMLParagraphElement; // over me
const userInput4 = document.getElementById("user-input") as HTMLInputElement; // over me

paragraph4.innerHTML = "Hello World";
userInput4.value = "John Doe ";
