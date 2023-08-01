export {};

/* Type Aliases / Custom Types 
=============================== */

type Combinable = number | string;
type ConversionDescription = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultType: ConversionDescription,
) {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    return Number(input1) + Number(input2);
  }
  return input1 + " " + input2;
}

const combinedAges = combine(30, 26, "as-number");
console.log("combinedAges = ", combinedAges);

const combinedNames = combine("John", "Doe", "as-text");
console.log("combinedAges = ", combinedNames);
