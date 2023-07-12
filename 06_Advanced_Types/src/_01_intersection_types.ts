export {};

// Code goes here!

/* Intersection :  & = intersection operator
-----------------*/

//--------------------------------------------- using Types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // over me, ElevatedEmployee must implement both of its parents types

const employee: ElevatedEmployee = {
  name: "Daniel",
  privileges: ["start server", "delete old requests"],
  startDate: new Date("1983-11-15"),
};

console.log("employee = ", employee);

//--------------------------------------------- using interface
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

//----------------------------------------

type Type1 = number;
type Type2 = boolean;
type Type3 = string;
type Type4 = Object;

type Final_12 = Type1 & Type2;
type Final_13 = Type1 & Type3;
type Final_23 = Type2 & Type3;
type Final_14 = Type2 & Type4;
