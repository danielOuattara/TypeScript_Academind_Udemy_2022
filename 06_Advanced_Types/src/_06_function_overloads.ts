/* function overload
-------------------------
allow to define multiple function signatures for the same function title

*/

type Combinable6 = string | number;
type Numeric6 = number | boolean;

//------------- signatures
function adder6(a: number, b: number): number;
function adder6(a: string, b: string): string;
function adder6(a: string, b: number): string;
function adder6(a: number, b: string): string;

function adder6(a: Combinable6, b: Combinable6) {
  // below is a type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result6_1 = adder6(4, 5);
const result6_2 = adder6("Daniel ", "Ouattara");
const result6_3 = adder6(1, " Ouattara");
const result6_4 = adder6(" Ouattara", 2);
