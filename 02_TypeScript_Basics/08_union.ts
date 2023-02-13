/* Union Types: pipe symbol 
============================ */

function combine(input1: number | string, input2: number | string) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  }
  return `${input1} ${input2}`;
}

const combinedAges = combine(30, 26);
console.log("combinedAges = ", combinedAges);

const combinedNames = combine("John", "Doe");
console.log("combinedAges = ", combinedNames);
