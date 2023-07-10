export {};

class Department_1 {
  name: string;
  year: number;

  constructor(deptName: string, deptYear: number) {
    this.name = deptName;
    this.year = deptYear;
  }

  describe() {
    // this is a method
    console.log(this.name);
  }

  describe_2 = () => {
    // this is a property
    console.log(this.name);
  };

  // describe_3 = function (this: Department_1) {
  //   // this is a property
  //   console.log(this.name);
  // };
}

const accounting = new Department_1("Accounting", 2011);

console.log("accounting: ", accounting);

accounting.describe(); //  Accounting
accounting.describe_2(); // Accounting
// accounting.describe_3(); // Accounting

console.log("-----------------------------");

/* interesting thing about the "this" keyword ! 
---------------------------------------------*/
const accountingCopy = {
  describe: accounting.describe,
  describe_2: accounting.describe_2,
  // describe_3: accounting.describe_3,
};
accountingCopy.describe(); //  undefined  ??
accountingCopy.describe_2(); //  undefined  ??
// accountingCopy.describe_3(); //  undefined  ??

const accountingCopy_1_2 = {
  describe: accounting.describe,
  name: "Finance",
};
accountingCopy_1_2.describe(); // Finance ??

console.log("-----------------------------");

const accountingCopy_1_3 = { describe_2: accounting.describe_2 };
accountingCopy_1_3.describe_2(); // Accounting --> Why ??

const accountingCopy_1_4 = {
  describe_2: accounting.describe_2,
  name: "Engineering",
};
accountingCopy_1_4.describe_2(); // Accounting --> Why still "Accounting" not "Engineering" ??

console.log("-----------------------------");

// const accountingCopy_1_5 = { describe_3: accounting.describe_3 };
// accountingCopy_1_5.describe_3(); // Accounting --> Why ??

const accountingCopy_1_6 = {
  // describe_3: accounting.describe_3,
  name: "Engineering",
};
// accountingCopy_1_6.describe_3(); // Accounting --> Why still "Accounting" not "Engineering" ??

console.log("-----------------------------");

/* what happened ? 
- 'this' refers to the 'instance' that called 'name' property

- describe() is a method of class and accounting_1_A & accounting_1_B call this method.
- accountingCopy_1_1 is an object that does not have a name property: so undefined is returned 
- accountingCopy_1_2 is an object that has a name property: so its value is returned 

- describe_2() is a property of class and accounting_2_A & accounting_2_B use this property.
- accountingCopy_2_A is an object that does not have a name property; but "Accounting" is returned 
- accountingCopy_2_B is an object that has a name property: but it's name value is not return, instead the value  of name from the class 

*/

//--------------------------------------------------------------

class Department_2 {
  name: string;
  year: number;

  constructor(deptName: string, deptYear: number) {
    this.name = deptName;
    this.year = deptYear;
  }

  describe(this: Department_2) {
    console.log(this.name);
  }
  describe_2 = () => {
    // this is a property
    console.log(this.name);
  };

  describe_3 = function (this: Department_2) {
    // this is a property
    console.log(this.name);
  };
}

const accounting_2 = new Department_2("Accounting_2", 2011);
accounting_2.describe();

const accounting_2_1 = {
  name: "accounting copy", // solution: add 'name' field
  year: 2001,
  describe: accounting_2.describe,
};

// accounting_2_1.describe();

// accounting.describe_2(); // Accounting
// accounting.describe_3(); // Accounting
console.log("-----------------------------");
