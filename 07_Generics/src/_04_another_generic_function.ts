export {};

/* _04_another_generic_function.ts
------------------------------------- */

//------------------------- before

function merge_1<T extends object, U extends object>(objectA: T, objectB: U) {
  return Object.assign(objectA, objectB);
}

const mergedObjects_1 = merge_1(
  { name: "Daniel", hobbies: ["sport", "asian food"] },
  { age: 39 },
);

console.log("mergedObjects_1 = ", mergedObjects_1);

//----------------
//  OR ( Below No constraint at all; because of spread operator)

function merge_2<T, U>(objectA: T, objectB: U) {
  return { ...objectA, ...objectB };
}

const mergedObjects_2 = merge_2(
  { name: "Daniel", hobbies: ["sport", "asian food"] },
  { age: 39 },
);

console.log("mergedObjects_2 = ", mergedObjects_2);

//
// ------------------------------- NEW  BELOW

interface Length_Interface {
  length: number;
}

function countAndDescribe<T extends Length_Interface>(element: T): [string, T] {
  let descriptionText = "No value provided";

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

// how to be less constrained about type ?
// we just need a length
