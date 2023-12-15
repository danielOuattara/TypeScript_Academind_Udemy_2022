export {};

/* _05_keyof_constraints.ts
------------------------------------- */

//------------------------------- before

interface Length_Interface {
  length: number;
}

function countAndDescribe<T extends Length_Interface>(element: T): [string, T] {
  let descriptionText = "No value";

  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [descriptionText, element];
}

console.log(countAndDescribe(""));
console.log(countAndDescribe("Hello there"));
console.log(countAndDescribe(["Hello", "there"]));
// console.log(countAndDescribe(10)); // Incorrect: Argument of type 'number' is not assignable to parameter of type 'Length_Interface'
//
//
//----------------------------------- NEW

// Incorrect expression of function
// Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Object'.
// No index signature with a parameter of type 'string' was found on type 'Object'.ts(7053)

// function extractAndDescribe_1(obj: Object, key: string) {
//   return `Value: ${obj[key]}`;
// }

// extractAndDescribe_1({}, "name");

//-------------------------------------------

function extractAndDescribe_2<T extends Object, V extends keyof T>(
  obj: T,
  key: V,
): string {
  return `Value: ${obj[key]}`;
}

// extractAndDescribe_2({}, "name"); // Incorrect, object is empty hence has no property with key value equal "name"
//
extractAndDescribe_2({ name: "Daniel" }, "name"); // OK
console.log(extractAndDescribe_2({ name: "Daniel" }, "name"));
