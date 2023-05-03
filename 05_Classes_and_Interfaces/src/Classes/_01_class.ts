class Department {
  name: string;
  year: number;

  constructor(deptName: string, deptYear: number) {
    this.name = deptName;
    this.year = deptYear;
  }

  describe() {
    console.log("Department title: ", this.name);
  }
}

const accounting = new Department("Accounting", 2011);
console.log("accounting: ", accounting);
accounting.describe(); // department: Accounting

/* interesting thing about the "this" keyword ! 
---------------------------------------------*/
const accountingCopy = { describe: accounting.describe };
accountingCopy.describe(); // department: Undefined

/* what happened ? 
- 'this' refers to the 'instance' that called 'name' property
- accountingCopy is an object that does not have a name property
- so undefined is returned */

console.log("-----------------------------");
//--------------------------------------------------------------

class Department_2 {
  name: string;
  year: number;

  constructor(deptName: string, deptYear: number) {
    this.name = deptName;
    this.year = deptYear;
  }

  describe(this: Department_2) {
    console.log("Department Title: ", this.name);
  }
}

const accounting_2 = new Department_2("Accounting_2", 2011);
accounting_2.describe();

const accounting_2_copy = {
  name: "accounting copy", // solution: add 'name' field
  year: 2001,
  describe: accounting_2.describe,
};
accounting_2_copy.describe();

console.log("-----------------------------");
