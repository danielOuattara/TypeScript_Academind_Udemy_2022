export {};

/* Enum Types 
================*/

// Approach by hand: tedious !

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const person = {
  name: "Daniel",
  age: 38,
  hobbies: ["sports", "cooking", "flying"],
  role: ADMIN,
};

console.log("user role is :", person.role);
console.log("---------------------------");

// Using tuples examples

enum Role_1 {
  ADMIN, // 0
  READ_ONLY, // 1
  AUTHOR, // 2
} // Correct

//

enum Role_2 {
  ADMIN = 12,
  READ_ONLY = 2,
  AUTHOR = 23,
} // On numbering logic: Correct

//

enum Role_3 {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR,
} // Mixing: Correct

const person_2 = {
  name: "Daniel",
  age: 38,
  hobbies: ["sports", "cooking", "flying"],
  role: Role_3.ADMIN,
};

console.log("person_2.role = ", person_2.role);

if (person_2.role === Role_3.ADMIN) {
  console.log("User is Admin");
}
if (person_2.role !== Role_3.AUTHOR) {
  console.log("User is NOT author");
}
