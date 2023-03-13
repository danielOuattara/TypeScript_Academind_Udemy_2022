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

interface NamedInterface16 {
  readonly userName: string;
}

interface GreetInterface16 extends NamedInterface16 {
  greet(arg: string): void;
}

//-------------------------------
let user16: GreetInterface16;

user16 = {
  userName: "Daniel",
  greet(personName) {
    console.log(`Hello ${personName}`);
  },
};

console.log(user16.userName);
user16.greet("John Doe");

console.log("-------------------");
//-------------------------------

class Person16 implements GreetInterface16 {
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

const daniel16 = new Person16("Daniel", 39);

console.log(daniel16.userName);
daniel16.defineAge(73);

console.log(daniel16.userAge);

console.log("-------------------");
//-------------------------------
