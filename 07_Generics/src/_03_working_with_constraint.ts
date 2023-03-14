/* _03_working_with_constraint 
------------------------------- 
add constraint with "extends" keyword + "type"

*/

function merge3_1<T extends object, U extends object>(objectA: T, objectB: U) {
  return Object.assign(objectA, objectB);
}

const mergedObjects3_1 = merge3_1(
  { name: "Daniel", hobbies: ["sport", "asian food"] },
  { age: 39 },
);
mergedObjects3_1.name;
mergedObjects3_1.hobbies;
mergedObjects3_1.age;

console.log("mergedObjects3_1 = ", mergedObjects3_1);
