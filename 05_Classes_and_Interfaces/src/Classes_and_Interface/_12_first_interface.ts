interface Person {
  name: string;
  age: number;

  greet(arg: string): void;
}

let user12: Person;

user12 = {
  name: "Daniel",
  age: 39,
  greet(stringArg) {
    console.log(`Hello ${stringArg}`);
  },
};

console.log(user12.name);
console.log(user12.age);
user12.greet("John Doe");
