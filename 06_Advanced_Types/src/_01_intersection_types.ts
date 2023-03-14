// Code goes here!

/* Intersection :  & = intersection operator
-----------------*/

//----------------------------- using Types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // over me

const employee: ElevatedEmployee = {
  name: "Daniel",
  privileges: ["start server", "delete old requests"],
  startDate: new Date("1983-11-15"),
};

//--------------------------------- using interface
interface Admin1 {
  name: string;
  privileges: string[];
}

interface Employee1 {
  name: string;
  startDate: Date;
}

// type ElevatedEmployee1 =  Admin1 & Employee1;
// OR
interface ElevatedEmployee1 extends Admin1, Employee1 {} // over me

const employee1: ElevatedEmployee1 = {
  name: "Daniel",
  privileges: ["start server", "delete old requests"],
  startDate: new Date("1983-12-15"),
};

//---------------------------------------

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // over me
