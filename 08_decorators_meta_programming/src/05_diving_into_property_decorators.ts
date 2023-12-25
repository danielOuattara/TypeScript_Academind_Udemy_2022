export {};

/* 
 Where do decorator acts on ?

 # decorator acting on a class receive at least one arg: constructor OR target
 # decorator acting on a field of a class receive 2 args: constructor OR target

 IMPORTANT: 

  - on an instance field the 'target' is the prototype of the object that is instantiated from the class.
  - on a static field target = constructor of the class


*/
function Field_Log(target: any, propertyName: string | Symbol) {
  console.log(" --- Property  Decorator --- ");
  console.log("target = ", target);
  console.log("propertyName = ", propertyName);
}

//----------------------------------------------------

class Product {
  @Field_Log
  title: string;
  private _price: number;

  @Field_Log
  static quantity = 23;

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Invalid price, Should be positive");
    }
  }

  getPriceWithTax(tax: number) {
    return this.price * (1 + tax);
  }
}

// const product_1 = new Product("milk", 1.3);
// console.log("product_1 = ", product_1);
