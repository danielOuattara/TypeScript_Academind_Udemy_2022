export {};

/* Functions as Types 
===================== */

function add(input1: number, input2: number): number {
  return input1 + input2;
}

// ---

function add_2(input1: number, input2: number): void {
  if (typeof input1 === "number" && typeof input2 === "number") {
    console.log(input1 + input2);
  }
  console.log(input1 + input2);
}

//--------------------------------------------------------------------
let combinedValue_1: Function; // <-- Function as Types, basic

combinedValue_1 = add; // Accepted

console.log(combinedValue_1(2, 8));

// combinedValue_1 = 5; // X Incorrect

combinedValue_1 = add_2; // Correct

combinedValue_1(2, 3);

console.log("--------------");

//---

let combinedValue_2: (a: number, b: number) => number; // <-- Function as Types, more specific, less Error prone

combinedValue_2 = add; // Accepted, because it takes 2 numbers params & return number

console.log(combinedValue_1(6, 8));

// combinedValue_2 = 5; // X Incorrect, it is a function , not a number

// combinedValue_2 = add_2; // Incorrect, because, here combined_2 will be a function that return "void"
// which is not accepted in its definition, line 34
