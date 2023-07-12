export {};

//--------------------

interface AddFunction {
  (a: number, b: number): number;
}

let add: AddFunction;
add = (number1: number, number2: number) => number1 + number2;
console.log(add(2, 3));

//--------------------------------------------------------------

/* New */

interface NamedInterface {
  readonly userName?: string;
  country?: string;
  readonly userHeight?: string;
}

interface GreetInterface extends NamedInterface {
  greet(arg: string): void;
  isAdmin?(arg: string): boolean; // optional method
}

//-------------------------------
let user: GreetInterface;

user = {
  userName: "Daniel",
  greet(personName) {
    console.log(`Hello ${personName}`);
  },
};

console.log(user.userName);
user.greet("John Doe");

console.log("----------------------------------------");
//-------------------------------

class Person implements GreetInterface {
  constructor(private personAge: number, public userName?: string) {}

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

const daniel = new Person(39, "Daniel");

console.log(daniel.userName);
daniel.defineAge(73);

console.log(daniel.userAge);

console.log("----------------------------------------");
