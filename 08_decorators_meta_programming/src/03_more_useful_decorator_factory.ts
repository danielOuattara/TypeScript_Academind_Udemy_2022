export {};

// Decorator Factory
function Logger(userName: string) {
  return function (constructor: Function) {
    console.log("Logging : ", userName);
    console.log(constructor.toString());
    console.log("--------------------------- END OF Logger");
  };
}

// Decorator Factory
function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const person_1 = new constructor();
    console.log("person_1 = ", person_1);

    const hookElement = document.getElementById(hookId);
    console.log("hookElement = ", hookElement);
    if (hookElement) {
      hookElement.innerHTML = template;
      //
      let p = document.createElement("p");
      p.innerHTML = person_1.name;
      hookElement.appendChild(p);
    }
  };
}

// @Logger("John Doe")
@WithTemplate("<h2> My Person Object </h2>", "app")
class Person {
  name = "Julie Ouattara";
  constructor() {
    console.log("Creating a person object");
  }
}

const person = new Person();
console.log(person);

// IMPORTANT : Decorators functions are executed on class definition, but not on class instantiation
