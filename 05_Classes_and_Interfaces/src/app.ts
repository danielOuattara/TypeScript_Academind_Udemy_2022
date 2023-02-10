class Department {
  name: string;
  year: number;

  constructor(deptName: string, deptYear: number) {
    this.name = deptName;
    this.year = deptYear;
  }

  describe() {
    console.log("Department: ", this.name);
  }
}

const accounting = new Department("Accounting", 2011);
console.log("accounting =", accounting);
accounting.describe();

//--------------------------------------------------------------

class Department_2 {
  name: string;
  year: number;

  constructor(deptName: string, deptYear: number) {
    this.name = deptName;
    this.year = deptYear;
  }

  describe(this: Department_2) {
    console.log("Department_2: ", this.name);
  }
}

const accounting_2 = new Department_2("Accounting_2", 2011);
console.log("accounting_2 =", accounting_2);

const accounting_2_copy = {
  name: "accounting copy",
  year: 2001,
  describe: accounting_2.describe,
};
accounting_2_copy.describe();

//--------------------------------------------------------------
// Access modifier

class Department_3 {
  name: string;
  year: number;
  private employees: string[] = [];

  constructor(deptName: string, deptYear: number) {
    this.name = deptName;
    this.year = deptYear;
  }

  describe(this: Department_3) {
    console.log("Department_3: ", this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformations() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting_3 = new Department_3("Accounting_3", 2011);
console.log("accounting_3 =", accounting_2);

accounting_3.addEmployee("John Doe");
accounting_3.addEmployee("Anna Doe");

accounting_3.printEmployeeInformations();

//--------------------------------------------------------------
// Short hand

class Department_4 {
  constructor(
    private name: string,
    private year: number,
    private employees: string[]
  ) {
    this.name = name;
    this.year = year;
    this.employees = [];
  }

  describe(this: Department_4) {
    console.log("Department_4: ", this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformations() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting_4 = new Department_4("Accounting_4", 2011, []);
console.log("accounting_4 =", accounting_4);

accounting_4.addEmployee("John Doe");
accounting_4.addEmployee("Anna Doe");

accounting_4.printEmployeeInformations();

//--------------------------------------------------------------
// Readonly

class Department_5 {
  constructor(
    private readonly id: string,
    private name: string,
    public year: number,
    private employees: string[]
  ) {
    this.id = "a12";
    this.name = name;
    this.year = year;
    this.employees = [];
  }

  describe(this: Department_5) {
    console.log("Department_5: ", this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformations() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting_5 = new Department_5("123", "Accounting_5", 2011, []);
console.log("accounting_5 =", accounting_5);

accounting_5.addEmployee("John Doe");
accounting_5.addEmployee("Anna Doe");

accounting_5.printEmployeeInformations();
