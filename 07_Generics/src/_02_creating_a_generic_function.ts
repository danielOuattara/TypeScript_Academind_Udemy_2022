/* _02_creating_a_generic_function.ts 
---------------------------------------

To accept dynamic types

*/

//--> function that merges 2 objects and return an object

// ------------------------------------- case 1

function merge2_1(objectA: object, objectB: object) {
  return Object.assign(objectA, objectB);
}

console.log(merge2_1({ name: "Daniel" }, { country: "France" })); // Ok

// but
const mergedObjects_2_1 = merge2_1({ name: "Daniel" }, { country: "France" });
// mergedObjects_2_1.name; // unknown
// mergedObjects_2_1.country; // unknown

//-------------------------------------- case 2

function merge2_2<T extends Object, U>(objectA: T, objectB: U) {
  return Object.assign(objectA, objectB);
}

const mergedObjects_2_2 = merge2_2(
  { name: "Daniel", hobbies: ["sport", "asian food"] },
  { country: "France" },
);
mergedObjects_2_2.name;
mergedObjects_2_2.hobbies;
mergedObjects_2_2.country;

//--------------------------------------- case 3

function merge2_3<T, U>(objectA: T, objectB: U) {
  return { ...objectA, ...objectB };
}

// OK but redundant: let typescript handle type itself
const mergedObjects_2_3 = merge2_3<{ name: string }, { country: string }>(
  { name: "Daniel" },
  { country: "France" },
);
mergedObjects_2_3.name;
mergedObjects_2_3.country;

//----------------------------------------  case 4

function merge2_4<T, U>(objectA: T, objectB: U) {
  return { ...objectA, ...objectB };
}

// OK but redundant: let typescript handle type itself
const mergedObjects_2_4 = merge2_4<
  { name: string; hobbies: string[] },
  { country: string }
>({ name: "Daniel", hobbies: ["sport", "asian food"] }, { country: "France" });
mergedObjects_2_4.name;
mergedObjects_2_4.country;
