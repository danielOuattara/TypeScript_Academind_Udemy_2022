export {};

/* Type Aliases & Object Type 
============================== */

// For example, you can simplify this code:

type Player = { name: string; age: number };
const u1: Player = { name: "Max", age: 30 }; // this works!
console.log(u1);

// For example, you can simplify this code:

// From:
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

// From:
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

const user_3 = { User: { name: "Jana Doe", age: 33 }, checkAge: 30 };

console.log(isOlder2(user_3));
