/* Arrays Types 
===================*/

const person = {
  name: "Daniel",
  age: 38,
  hobbies: ["sports", "cooking", "flying"],
};

console.log("person = ", person);

//

let favoriteActivities: string[];
// favoriteActivities = "sports"; // Incorrect, expected array of string, not a string variable
favoriteActivities = ["sports"]; // Correct, received an array of string
// favoriteActivities = ["sports", 1]; // Incorrect, array of string only

//

let favoriteActivities2: (string | number)[];
favoriteActivities2 = ["dance", "234"];
console.log("favoriteActivities2 = ", favoriteActivities2);

//

let favoriteActivities3: any[];
favoriteActivities3 = ["sports", 1, true]; // Correct, array of any

//

console.log("person.name = ", person.name);
for (const hobby of person.hobbies) {
  console.log(
    hobby[0].toUpperCase() + hobby.slice(1),
    "- index : ",
    person.hobbies.indexOf(hobby),
  );
}
