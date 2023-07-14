export {};

// Decorator
function Logger(userName: string) {
  console.log("--->> Logger Function");

  return function (constructor: Function) {
    console.log("~~~>> Logger Decorator Function");
    console.log("Logging : ", userName);
    console.log(constructor.toString());
  };
}

// Decorator: this decorator will be executed only when an object is instantiated from a class
function WithTemplate(template: string, hookId: string) {
  console.log("--->> WithTemplate Function");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T,
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log(" ~~~>> Template Decorator Function");
        const hookElement = document.getElementById(hookId);
        if (hookElement) {
          hookElement.innerHTML = template;
          let p = document.createElement("p");
          hookElement.appendChild(p);
          p.innerHTML = this.name;
        }
      }
    };
  };
}

@Logger("John Doe")
@WithTemplate("<h1> My Person Object </h1>", "app")
class Person {
  name = "Julie";
  constructor() {
    console.log("Creating a person object");
  }
}

// const person = new Person();
// console.log(person);

/*
 IMPORTANT : Decorators functions can be executed
  - on class definition,
  - when an object is instantiate from the class
*/
