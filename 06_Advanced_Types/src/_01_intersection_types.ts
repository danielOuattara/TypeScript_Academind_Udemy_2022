export {};

// Code goes here!

/* Intersection :  & = intersection operator
-----------------*/

//--------------------------------------------- using Types

// Case 1
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
// Case 1
interface Admin2 {
  name: string;
  privileges: string[];
}

interface Employee2 {
  name: string;
  startDate: Date;
}

// type ElevatedEmployee2 = Admin2 & Employee2;
// OR
interface ElevatedEmployee2 extends Admin2, Employee2 {} // over me

const employee2: ElevatedEmployee2 = {
  name: "Daniel",
  privileges: ["start server", "delete old requests"],
  startDate: new Date("1983-12-15"),
};

//---------------------------------------
// Case 2
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // over me

//----------------------------------------
// Case 2
type Type1 = number;
type Type2 = boolean;
type Type3 = string;
type Type4 = Object;

type Final_12 = Type1 & Type2;
type Final_13 = Type1 & Type3;
type Final_23 = Type2 & Type3;
type Final_14 = Type2 & Type4;

/* 
intersection type can be: 

- in the case of object type, it's the combination of type (Case 1)
- in the case of union type, it's the intersection of those types (Case 2)
*/
