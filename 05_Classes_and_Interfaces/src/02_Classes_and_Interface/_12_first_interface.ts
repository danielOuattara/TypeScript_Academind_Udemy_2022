export {};

type PersonType = {
  name: string;
  age: number;
  greet(arg: string): void;
};

let user: PersonType = {
  name: "Daniel",
  age: 39,
  greet(stringArg) {
    console.log(`Hello ${stringArg}`);
  },
};

console.log(user);

//---------------------------------------------------

interface PersonInterface {
  name: string;
  age: number;
  greet(arg: string): void;
}

let user_2: PersonInterface;

user_2 = {
  name: "Daniel",
  age: 39,
  greet(stringArg) {
    console.log(`Hello ${stringArg}`);
  },
};
console.log(user_2.name);
console.log(user_2.age);
user_2.greet("John Doe");
