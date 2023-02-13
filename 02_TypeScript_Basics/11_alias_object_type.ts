/* Type Aliases & Object Type 
============================== */

type Player = { name: string; age: number };
const u1: Player = { name: "Max", age: 30 }; // this works!

// For example, you can simplify this code:

function greet1(user: { name: string; age: number }) {
  console.log("Hi, I am " + user.name);
}

// To :

type User = { name: string; age: number };

function greet2(user: User) {
  console.log("Hi, I am " + user.name);
}

greet2({ name: "john", age: 32 });

//----------------------------------------------------------------------

function isOlder1(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

// To:

type UserWithAge = {
  User: User;
  checkAge: number;
};

function isOlder2(user: UserWithAge) {
  return user.checkAge > user.User.age;
}

console.log(isOlder2({ User: { name: "Jana Doe", age: 33 }, checkAge: 30 }));
