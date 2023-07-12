export {};

/* function overload
-------------------------
allow to define multiple function signatures for the same function title

*/

type Combinable = string | number;
type Numeric = number | boolean;

//------------- signatures
function adder(a: number, b: number): number;
function adder(a: string, b: string): string;
function adder(a: string, b: number): string;
function adder(a: number, b: string): string;

//-------------------------------------------

function adder(a: Combinable, b: Combinable) {
  // below is a type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result_1 = adder(4, 5);
// result_1. // // OK code completion

const result_2 = adder("Daniel ", "Ouattara");
// result_2.  // OK code completion

const result_3 = adder(1, " Ouattara");
// result_3.  // OK code completion

const result_4 = adder(" Ouattara", 2);
// result_4.  // OK code completion
