export {};

/* Literal Types 
================= */

function combine(
  input1: number | string,
  input2: number | string,
  resultType: "as-number" | "as-text",
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

const combinedMixed_1 = combine("John", 45, "as-number");
console.log("combinedMixed_1 = ", combinedMixed_1);

const combinedMixed_2 = combine("John", 45, "as-text");
console.log("combinedMixed_2 = ", combinedMixed_2);

const combinedMixed_3 = combine(45, "John", "as-number");
console.log("combinedMixed_3 = ", combinedMixed_3);

const combinedMixed_4 = combine(45, "John", "as-text");
console.log("combinedMixed_4 = ", combinedMixed_4);
