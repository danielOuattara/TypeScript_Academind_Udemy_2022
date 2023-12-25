export {};

/* 

Decorators are naturally executed when the class logic is defined;
but their logic can allow for them to be executed on class instantiation
*/

function AutoBind(
  target: any,
  methodName: string | Symbol,
  descriptor: PropertyDescriptor,
) {
  console.log(" --- Method Decorator --- ");
  console.log("target = ", target);
  console.log("MethodName = ", methodName);
  console.log("method descriptor = ", descriptor);

  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: true,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };
  return adjustedDescriptor;
}

class Printer {
  message = "This works !";

  showMessage_1() {
    console.log(this.message);
  }

  @AutoBind
  showMessage_2() {
    console.log(this.message);
  }
}

const printer_1 = new Printer();
console.log("printer_1 = ", printer_1);

const button = document.querySelector("button")! as HTMLButtonElement;

button.addEventListener("click", () => printer_1.showMessage_1());

button.addEventListener("click", printer_1.showMessage_2);
