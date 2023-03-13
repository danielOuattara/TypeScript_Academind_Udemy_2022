/* implement inheritance in interface 
------------------------------------- 
an interface can inherit from multiple interfaces

*/

interface NamedInterface15 {
  readonly userName: string;
}

interface GreetInterface15 extends NamedInterface15 {
  greet(arg: string): void;
}

//-------------------------------
let user15: GreetInterface15;

user15 = {
  userName: "Daniel",
  greet(personName) {
    console.log(`Hello ${personName}`);
  },
};

console.log(user15.userName);
user15.greet("John Doe");

console.log("-------------------");
//-------------------------------

class Person15 implements GreetInterface15 {
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

const daniel15 = new Person15("Daniel", 39);

console.log(daniel15.userName);
daniel15.defineAge(73);

console.log(daniel15.userAge);

console.log("-------------------");
//-------------------------------
