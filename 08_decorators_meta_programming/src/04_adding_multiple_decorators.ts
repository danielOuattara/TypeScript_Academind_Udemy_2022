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

// Decorator
function WithTemplate(template: string, hookId: string) {
  console.log("--->> WithTemplate Function");
  return function (constructor: any) {
    console.log(" ~~~>> Template Decorator Function");
    const person_1 = new constructor();
    const hookElement = document.getElementById(hookId);
    if (hookElement) {
      hookElement.innerHTML = template;
      let p = document.createElement("p");
      hookElement.appendChild(p);
      p.innerHTML = person_1.name;
    }
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

const person = new Person();
console.log(person);

// IMPORTANT : Decorators functions are executed on class definition, but not on class instantiation
