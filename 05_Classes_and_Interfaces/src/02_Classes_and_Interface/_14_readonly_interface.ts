export {};

interface GreetInterface {
  readonly userName: string;
  greet(arg: string): void;
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
// user.userName = "Paul"; // Cannot assign to 'userName' because it is a read-only property.

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

daniel.userName = "Paul";
console.log(daniel);

//-------------------------------------------------------------------

class Person_2 implements GreetInterface {
  constructor(readonly userName: string, private personAge: number) {}

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

const daniel_2 = new Person_2("Daniel", 39);

console.log(daniel_2.userName);
daniel_2.defineAge(73);

console.log(daniel_2.userAge);

// daniel_2.userName = "Paul"; // Cannot assign to 'userName' because it is a read-only property.
console.log(daniel_2);

//-------------------------------
