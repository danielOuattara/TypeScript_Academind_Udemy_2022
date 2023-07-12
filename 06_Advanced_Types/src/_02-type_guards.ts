export {};

console.log("------------------------------------------");

/* Type guards
--------------- */

// - 1
//
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//-------------

function adder1(a: Combinable, b: Combinable) {
  // below is a type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

//-----------
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//
interface ElevatedEmployeeInterface extends Admin, Employee {} // over me

const employee_interface: ElevatedEmployeeInterface = {
  name: "Daniel",
  privileges: ["start server", "delete old requests"],
  startDate: new Date("1983-12-15"),
};

console.log("employee_interface = ", employee_interface);
console.log("------------------------------------------");
//---------------------------

//
type ElevatedEmployee = Admin & Employee; // over me

const employee: ElevatedEmployee = {
  name: "Daniel",
  privileges: ["start server", "delete old requests"],
  startDate: new Date("1983-12-15"),
};

type UnknownEmployeeStatus = Employee | Admin; // over me

function printEmployeeInformation(employee: UnknownEmployeeStatus) {
  console.log("Employee Name : " + employee.name); // Ok, easy

  if ("privileges" in employee) {
    console.log("Privileges: " + employee.privileges);
  }
  if ("startDate" in employee) {
    console.log("start Date: " + employee.startDate);
  }
}

printEmployeeInformation(employee);
console.log("-------");

printEmployeeInformation({ name: "John", startDate: new Date() });
console.log("-------");

printEmployeeInformation({
  name: "Jana",
  privileges: ["high salary", "much work"],
});
console.log("------------------------------------------");

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
