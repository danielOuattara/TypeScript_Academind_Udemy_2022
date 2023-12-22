export {};

/* Decorator is a function you apply to something, like a class
-------------------------------------------------------------- */

/* 01_decorator_and_class.ts : decorator are all about classes
---------------------------------------------------------------- */

class Person_1 {
  name = "Daniel";
  constructor() {
    console.log("Creating a person object Person_1 ...");
  }
}

const person_1 = new Person_1();
console.log(person_1);

//--------------------------------------------------------------------- Decorator

// A decorator is a function that is applied to something, like a class in a certain way
// The number of argument(s) that a decorator accepts depend on where the decorator is applied
console.log("----------------------------------------------");

// first Decorator:
function Logger(constructor: Function) {
  console.log("Logger...");
  console.log(constructor.toString());
}

@Logger
class Person_2 {
  name = "Julie";
  constructor() {
    console.log("Creating a person object Person_2 ...");
  }
}

const person_2 = new Person_2();
console.log(person_2);

// IMPORTANT : Decorators functions are executed on class definition, but not on instantiation
