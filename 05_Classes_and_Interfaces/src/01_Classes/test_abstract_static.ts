abstract class Parent {
  static childNumber: number = 4;
  static describe() {
    console.log(`child number is : ${this.childNumber}`);
  }
}

Parent.describe();
console.log(Parent.childNumber);
