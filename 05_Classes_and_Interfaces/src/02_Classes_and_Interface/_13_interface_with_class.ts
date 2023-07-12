export {};

interface GreetInterface {
  name: string;
  greet(arg: string): void;
}

//-------------------------------
let user: GreetInterface;

user = {
  name: "Daniel",
  greet(personName) {
    console.log(`Hello ${personName}`);
  },
};

console.log(user.name);
user.greet("John Doe");

console.log("-------------------------------------");

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

  getAge = () => {
    return this.personAge;
  };

  greet(person: string) {
    console.log(`Hello ${person}`);
  }
}

const daniel = new Person("Daniel", 39);

console.log(daniel.name);
// console.log(daniel.personAge); // Error: Property 'personAge' is private and only accessible within class 'Person'
daniel.defineAge(93);

console.log(daniel.userAge);

console.log("-------------------");
//-------------------------------
