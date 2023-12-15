export {};

// Decorator factory
function Logger(userName: string) {
  return function (constructor: Function) {
    console.log("Logging : ", userName);
    console.log(constructor.toString());
  };
}

@Logger("John Doe")
class Person {
  name = "Julie";
  constructor() {
    console.log(`Creating a person object: ${this.name}`);
  }
}

// const person = new Person();
// console.log(person);

// IMPORTANT : Decorators functions are executed on class definition, but not on class instantiation
