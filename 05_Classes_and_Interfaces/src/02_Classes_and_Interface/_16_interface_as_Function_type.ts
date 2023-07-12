/* New */

type AddFunction1 = (a: number, b: number) => number;

let add1: AddFunction1;
add1 = (number1: number, number2: number) => number1 + number2;

//--------------------

interface AddFunction2 {
  (a: number, b: number): number;
}

let add2: AddFunction2;
add2 = (number1: number, number2: number) => number1 + number2;

//--------------------------------------------------------------

interface NamedInterface {
  readonly userName: string;
}

interface GreetInterface extends NamedInterface {
  greet(arg: string): void;
}

console.log("---------------------------------------------------");

let user: GreetInterface;

user = {
  userName: "Daniel",
  greet(personName) {
    console.log(`Hello ${personName}`);
  },
};

console.log(user.userName);
user.greet("John Doe");

console.log("---------------------------------------------------");

class Person implements GreetInterface {
  constructor(public userName: string, private personAge: number) {}

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

console.log(daniel.userName);
daniel.defineAge(73);

console.log(daniel.userAge);

console.log("-------------------");
//-------------------------------
