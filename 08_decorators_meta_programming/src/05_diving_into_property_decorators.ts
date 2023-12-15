export {};

/* 
 Where do decorator acts on ?

 # decorator acting on a class receive at least one arg: constructor OR target
 # decorator acting on a class field receive 2 args: constructor OR target

*/
function Property_Log(target: any, propertyName: string | Symbol) {
  console.log(" --- Property  Decorator --- ");
  console.log("target = ", target);
  console.log("propertyName = ", propertyName);
}

class Product {
  @Property_Log
  _title: string;
  private _price: number;

  constructor(title: string, price: number) {
    this._title = title;
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
