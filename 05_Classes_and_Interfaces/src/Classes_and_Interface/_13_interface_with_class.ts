interface GreetInterface {
  name: string;
  greet(arg: string): void;
}

//-------------------------------
let user13: GreetInterface;

user13 = {
  name: "Daniel",
  greet(personName) {
    console.log(`Hello ${personName}`);
  },
};

console.log(user13.name);
user13.greet("John Doe");

console.log("-------------------");
//-------------------------------

class Person implements GreetInterface {
  constructor(public name: string, private personAge: number) {}

  get userAge() {
    return this.personAge;
  }

  set userAge(value: number) {
    this.personAge = value;
  }

  defineAge(value: number) {
    return (this.personAge = value);
  }

  greet(person: string) {
    console.log(`Hello ${person}`);
  }
}

const daniel = new Person("Daniel", 39);

console.log(daniel.name);
daniel.defineAge(93);

console.log(daniel.userAge);

console.log("-------------------");
//-------------------------------
