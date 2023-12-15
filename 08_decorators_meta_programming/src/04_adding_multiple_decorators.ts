export {};

/* 
# Decorator functions are executed from nearest to farthest 
  of the class on which they are applied to.

# Decorator factory are executed from first to last declared 
  in the code.

*/

// Decorator Factory
function Logger(userName: string) {
  console.log("LOGGER DECORATOR FACTORY");

  return function (constructor: Function) {
    console.log("~~~>> Logger Decorator Function");
    console.log("Logging : ", userName);
    console.log(constructor.toString());
  };
}

// Decorator Factory
function WithTemplate(template: string, hookId: string) {
  console.log("WITHTEMPLATE DECORATOR FACTORY");
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
