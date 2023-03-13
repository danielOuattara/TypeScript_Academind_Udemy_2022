//--------------------

interface AddFunction17 {
  (a: number, b: number): number;
}

let add17: AddFunction17;
add17 = (number1: number, number2: number) => number1 + number2;

//--------------------------------------------------------------

/* New */

interface NamedInterface17 {
  readonly userName?: string;
  country?: string;
  readonly userHeight?: string;
}

interface GreetInterface17 extends NamedInterface17 {
  greet(arg: string): void;
}

//-------------------------------
let user17: GreetInterface17;

user17 = {
  userName: "Daniel",
  greet(personName) {
    console.log(`Hello ${personName}`);
  },
};

console.log(user17.userName);
user17.greet("John Doe");

console.log("-------------------");
//-------------------------------

class Person17 implements GreetInterface17 {
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

const daniel17 = new Person17(39, "Daniel");

console.log(daniel17.userName);
daniel17.defineAge(73);

console.log(daniel17.userAge);

console.log("-------------------");
//-------------------------------
