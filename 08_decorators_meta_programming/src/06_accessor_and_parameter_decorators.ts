export {};

/* 
target: 
 - for instance item -> prototype of the object
 - for static item   -> constructor of the object

*/
// ----------------------------------------------------
//
// 2 arguments for decorator on field item
function Field_Log(target: any, propertyName: string | Symbol) {
  console.log(" --- Field Decorator --- ");
  console.log("target = ", target);
  console.log("propertyName = ", propertyName);
}

// ----------------------------------------------------
//
// 3 arguments for decorator on accessor item
function Accessor_Log(
  target: any,
  AccessorName: string | Symbol,
  descriptor: PropertyDescriptor,
) {
  console.log(" --- Accessor Decorator --- ");
  console.log("target = ", target);
  console.log("AccessorName = ", AccessorName);
  console.log("accessor descriptor = ", descriptor);
}

// ----------------------------------------------------
//
// 3 arguments for decorator on method item
function Method_Log(
  target: any,
  methodName: string | Symbol,
  descriptor: PropertyDescriptor,
) {
  console.log(" --- Method Decorator --- ");
  console.log("target = ", target);
  console.log("MethodName = ", methodName);
  console.log("method descriptor = ", descriptor);
}

// ----------------------------------------------------
//
// 3 arguments for decorator on method item
function Parameter_Log(
  target: any,
  parentMethodName: string | Symbol,
  position: number,
) {
  console.log(" --- Parameter Decorator --- ");
  console.log("target = ", target);
  console.log("parentMethodName = ", parentMethodName);
  console.log("position = ", position);
}

//======================================================

class Product {
  @Field_Log
  _title: string;
  private _price: number;

  constructor(title: string, price: number) {
    this._title = title;
    this._price = price;
  }

  // @Accessor_Log
  get price() {
    return this._price;
  }

  @Accessor_Log
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Invalid price, Should be positive");
    }
  }

  @Method_Log
  getPriceWithTax(@Parameter_Log tax: number) {
    return this._price * (1 + tax);
  }
}

console.log("=================================");
