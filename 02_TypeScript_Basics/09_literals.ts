/* Litteral Types 
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
