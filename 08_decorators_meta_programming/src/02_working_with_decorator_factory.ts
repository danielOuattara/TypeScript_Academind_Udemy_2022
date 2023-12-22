export {};

// // first Decorator:
// function Logger(constructor: Function) {
//   console.log("Logger...");
//   console.log(constructor.toString());
// }

// Decorator factory
function Logger(message: string) {
  return function (constructor: Function) {
    console.log("Message: ", message);
    console.log(constructor.toString());
  };
}

@Logger("Logger on Person Class")
class Person {
  name = "Julie";
  constructor() {
    console.log(`Creating a person object: ${this.name}`);
  }
}

// const person = new Person();
// console.log(person);

/* 
IMPORTANT : Decorators functions can be executed on class definition, 
            but not on class instantiation 
*/
