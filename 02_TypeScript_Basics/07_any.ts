/* Any Types
============ */

const person = {
  name: "Daniel",
  age: 38,
  hobbies: ["sports", "cooking", "flying"],
};

let favoriteActivities: any[];

// favoriteActivities = "sports"; // Incorrect, expected array of any, not a string variable

favoriteActivities = ["sports"];
// Correct, received an array of string

favoriteActivities = ["sports", 1];
// Incorrect, array of string only

let favoriteActivities2: any[];

favoriteActivities2 = ["sports", 1]; // Correct, array of any

for (const hobby of person.hobbies) {
  console.log(
    hobby[0].toUpperCase() + hobby.slice(1),
    "- index : ",
    person.hobbies.indexOf(hobby),
  );
}
