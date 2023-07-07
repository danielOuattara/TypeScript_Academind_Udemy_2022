export {};

/* Tuples Types 
==================*/

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // <-- used to declare tuple
} = {
  name: "Daniel",
  age: 38,
  hobbies: ["sports", "cooking", "flying"],
  role: [2, "author"],
};

console.log("person = ", person);
console.log("------------------");

person.role.push("admin"); // Tuple ONLY accepted push() to update its content
person.role = [0, "admin"]; //  Correct

// person.role = [0, "admin", "user"]; // X Incorrect, can't alter Tuple
// person.role[1] = 10; // Incorrect, Tuple can't be altered

console.log("person = ", person);
