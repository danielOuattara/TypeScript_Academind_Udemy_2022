export {};

/* _03_working_with_constraint 
------------------------------- 
add constraint with "extends" keyword + "type"

*/

// -------------- constraint on single parameters

function merge_1<T extends Object, U>(objectA: T, objectB: U) {
  return Object.assign(objectA, objectB);
}

const mergedObjects_1 = merge_1(
  { name: "Daniel", hobbies: ["sport", "asian food"] },
  { age: 39 },
);
mergedObjects_1.name;
mergedObjects_1.hobbies;
mergedObjects_1.age;

console.log("mergedObjects_1 = ", mergedObjects_1);

//--------------- constraint on both parameters

function merge_2<T extends Object, U extends Object>(objectA: T, objectB: U) {
  return Object.assign(objectA, objectB);
}

const mergedObjects_2 = merge_2(
  { name: "Daniel", hobbies: ["sport", "asian food"] },
  { age: 39 },
);
mergedObjects_2.name;
mergedObjects_2.hobbies;
mergedObjects_2.age;

console.log("mergedObjects_2 = ", mergedObjects_2);
