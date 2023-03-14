console.log("-------");

/* Type guards
--------------- */

// - 1
//
type Combinable2 = string | number;
type Numeric2 = number | boolean;

type Universal2 = Combinable2 & Numeric2;

//-------------

function adder1(a: Combinable2, b: Combinable2) {
  // below is a type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

//-----------
type Admin2 = {
  name: string;
  privileges: string[];
};

type Employee2 = {
  name: string;
  startDate: Date;
};

interface ElevatedEmployee2 extends Admin2, Employee2 {} // over me

const employee2: ElevatedEmployee2 = {
  name: "Daniel",
  privileges: ["start server", "delete old requests"],
  startDate: new Date("1983-12-15"),
};

type UnknownEmployee = Employee2 | Admin2; // over me

function printEmployeeInformation(employee: UnknownEmployee) {
  console.log("Employee Name : " + employee.name); // Ok, easy

  if ("privileges" in employee) {
    console.log("Privileges: " + employee.privileges);
  }
  if ("startDate" in employee) {
    console.log("start Date: " + employee.startDate);
  }
}

printEmployeeInformation(employee2);
console.log("-------");
printEmployeeInformation({ name: "John", startDate: new Date() });
console.log("-------");
printEmployeeInformation({
  name: "Jana",
  privileges: ["high salary", "much work"],
});
console.log("-------");

//
// - 2
//
// using the "instance of" Type Guards

class Car {
  drive() {
    console.log("Driving car ...");
  }
}

class Truck {
  drive() {
    console.log("Driving truck ...");
  }

  loadCargo(amount: number) {
    console.log("Loading a cargo " + amount + " tons");
  }
}

const vehicle1 = new Car();
const vehicle2 = new Truck();

type Vehicle = Car | Truck; // over me

function useVehicle(vehicle: Vehicle) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(30_000);
  }

  vehicle.drive();
}

useVehicle(vehicle1);
useVehicle(vehicle2);
