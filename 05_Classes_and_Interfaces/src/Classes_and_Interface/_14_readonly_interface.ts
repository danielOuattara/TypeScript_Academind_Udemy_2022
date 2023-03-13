interface GreetInterface14 {
  readonly userName: string;
  greet(arg: string): void;
}

//-------------------------------
let user14: GreetInterface14;

user14 = {
  userName: "Daniel",
  greet(personName) {
    console.log(`Hello ${personName}`);
  },
};

console.log(user14.userName);
user14.greet("John Doe");

console.log("-------------------");
//-------------------------------

class Person14 implements GreetInterface14 {
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

const daniel14 = new Person14("Daniel", 39);

console.log(daniel14.userName);
daniel14.defineAge(73);

console.log(daniel14.userAge);

console.log("-------------------");
//-------------------------------
