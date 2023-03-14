/* _04_another_generic_function.ts
------------------------------------- */

//------------------------- before

function merge4_1<T extends object, U extends object>(objectA: T, objectB: U) {
  return Object.assign(objectA, objectB);
}

const mergedObjects4_1 = merge4_1(
  { name: "Daniel", hobbies: ["sport", "asian food"] },
  { age: 39 },
);

console.log("mergedObjects3_1 = ", mergedObjects4_1);

// ------------------------- new

interface Length {
  length: number;
}

function countAndDescribe<T extends Length>(element: T) {
  let descriptionText = "No value";

  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(""));
console.log(countAndDescribe("Hello there"));
console.log(countAndDescribe(["Hello", "there"]));
// console.log(countAndDescribe(10)); // Incorrect: Argument of type 'number' is not assignable to parameter of type 'Length'

// how to be less constrained about type ?
// we just need a length
