/* _05_keyof_constraints.ts
------------------------------------- */

interface Length {
  length: number;
}

function countAndDescribe5<T extends Length>(element: T) {
  let descriptionText = "No value";

  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe5(""));
console.log(countAndDescribe5("Hello there"));
console.log(countAndDescribe5(["Hello", "there"]));
// console.log(countAndDescribe5(10)); // Incorrect: Argument of type 'number' is not assignable to parameter of type 'Length'
//
//
//----------------------------------- new

// Incorrect

// function extractAndDescribe5_1(obj: object, key: string) {
//   return `Value: ${obj[key]}`;
// }

// extractAndDescribe5_1({}, "name");

//-------------------------------------------

function extractAndDescribe5_2<T extends object, V extends keyof T>(
  obj: T,
  key: V,
) {
  return `Value: ${obj[key]}`;
}

// extractAndDescribe5_2({}, "name"); // Incorrect, object is empty
extractAndDescribe5_2({ name: "Daniel" }, "name"); // OK
