class Department {
  name: string;
  year: number;

  constructor(deptName: string, deptYear: number) {
    this.name = deptName;
    this.year = deptYear;
  }

  describe() {
    console.log(this.name);
  }

  describe_2 = () => {
    console.log(this.name);
  };

  describe_3 = function (this: Department) {
    console.log(this.name);
  };
}

const accounting = new Department("Accounting", 2011);

console.log("accounting: ", accounting);
accounting.describe(); // Accounting
accounting.describe_2(); // Accounting
accounting.describe_3(); // Accounting

console.log("-----------------------------");

/* interesting thing about the "this" keyword ! 
---------------------------------------------*/
const accounting_Copy_A = {
  show: accounting.describe,
  show_2: accounting.describe_2,
  show_3: accounting.describe_3,
};
accounting_Copy_A.show(); // Undefined
accounting_Copy_A.show_2(); // Accounting
// accounting_Copy_A.show_3(); // Error : The 'this' context of type '{ show: () => void; show_2: () => void; show_3: (this: Department) => void; }' is not assignable to method's 'this' of type 'Department'.

/* what happened ? 
- 'this' refers to the 'instance' that called 'name' property
- accounting_Copy_A is an object that does not have a name property
- so undefined is returned */

console.log("-----------------------------");

const accounting_Copy_B = {
  name: "Engineering",
  show: accounting.describe,
  show_2: accounting.describe_2,
  show_3: accounting.describe_3,
};
accounting_Copy_B.show(); // Engineering
accounting_Copy_B.show_2(); // Accounting
// accounting_Copy_B.show_3(); // Error

console.log("--------------------------------------------------- ");
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
    console.log(this.name);
  };

  describe_3 = function (this: Department) {
    console.log(this.name);
  };
}

const accounting_2 = new Department_2("Accounting_2", 2011);
accounting_2.describe();

const accounting_2_copy = {
  name: "accounting copy", // solution: add 'name' field
  year: 2001,
  show: accounting.describe,
  show_2: accounting.describe_2,
  show_3: accounting.describe_3,
};

accounting_2_copy.show();
accounting_2_copy.show_2();
// accounting_2_copy.show_3(); // Error

console.log("-----------------------------");
