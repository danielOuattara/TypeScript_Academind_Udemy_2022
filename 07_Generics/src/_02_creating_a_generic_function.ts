export {};

/* _02_creating_a_generic_function.ts 
---------------------------------------

To accept dynamic types

*/

//--> function that merges 2 objects and return an object

// ------------------------------------- case 1

function merge_1_1(object_A: object, object_B: object) {
  return Object.assign(object_A, object_B);
}

console.log(merge_1_1({ name: "Daniel" }, { country: "France" })); // Ok

// but cannot access to key property in the output object
const mergedObjects_1_1 = merge_1_1({ name: "Daniel" }, { country: "France" });
// mergedObjects_1_1.name; // unknown
// mergedObjects_1_1.country; // unknown

// OR (same problem below as previous)

function merge_1_2(object_A: object, object_B: object) {
  return { ...object_A, ...object_B };
}

console.log(merge_1_2({ name: "Daniel" }, { country: "France" })); // Ok

// but
const mergedObjects_1_2 = merge_1_2({ name: "Daniel" }, { country: "France" });
// mergedObjects_1_2.name; // unknown
// mergedObjects_1_2.country; // unknown

//-------------------------------------- case 2

/*  No more accepted by TypeScript 
function merge_2_1<T, U>(object_A: T, object_B: U) {  // Constraint required on object_A
  return Object.assign(object_A, object_B);
}

const mergedObjects_2_1 = merge_2_1(
  { name: "Daniel", hobbies: ["sport", "asian food"] },
  { country: "France" },
);
mergedObjects_2_1.name;
mergedObjects_2_1.hobbies;
mergedObjects_2_1.country;
 */

// But this one is accepted !

function merge_2_2<T extends Object, U>(object_A: T, object_B: U) {
  return Object.assign(object_A, object_B);
}

const mergedObjects_2_2_1 = merge_2_2(
  { name: "Daniel", hobbies: ["sport", "asian food"] },
  { country: "France" },
);
mergedObjects_2_2_1.name;
mergedObjects_2_2_1.hobbies;
mergedObjects_2_2_1.country;

// another example on the same function call

const mergedObjects_2_2_2 = merge_2_2(
  { countries: ["Russia", "China", "Brazil"] },
  { country: "South Africa, India" },
);
mergedObjects_2_2_2.countries;
mergedObjects_2_2_2.country;

//--------------------------------------- case 3

// using spread operator, No constraint required ! ( New TypeScript Transpiler Version ?)
function merge_3<T, U>(object_A: T, object_B: U) {
  return { ...object_A, ...object_B };
}

// OK but redundant: let typescript handle type itself
const mergedObjects_3 = merge_3<{ name: string }, { country: string }>(
  { name: "Daniel" },
  { country: "France" },
);
mergedObjects_3.name;
mergedObjects_3.country;

//----------------------------------------  case 4

function merge_4<T, U>(object_A: T, object_B: U) {
  return { ...object_A, ...object_B };
}

// OK but redundant: let typescript handle type itself
const mergedObjects_4 = merge_4<
  { name: string; hobbies: string[] },
  { country: string }
>({ name: "Daniel", hobbies: ["sport", "asian food"] }, { country: "France" });
mergedObjects_4.name;
mergedObjects_4.country;
