/* 01_decorator_and_class.ts
----------------------------- */

console.log("----------------------");

class Person1_1 {
  name = "Daniel";
  constructor() {
    console.log("Creating a person object");
  }
}

const person1_1 = new Person1_1();
console.log(person1_1);

// --------------------- A decorator is a function that is pally to a class
console.log("----------------------");

function Logger(constructor: Function) {
  console.log("Logging... Logger");
  console.log(constructor.toString());
}

@Logger
class Person1_2 {
  name = "Daniel";
  constructor() {
    console.log("Creating a person object");
  }
}

const person1_2 = new Person1_2();
console.log(person1_2);
