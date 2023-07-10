export {};

//--------------------------------------------------------------
// Access modifier

class Department {
  name: string;
  year: number;
  private employees: string[] = [];

  constructor(deptName: string, deptYear: number) {
    this.name = deptName;
    this.year = deptYear;
  }

  describe(this: Department) {
    console.log("Department: ", this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log("this.employees.length = ", this.employees.length);
    console.log("this.employees = ", this.employees);
  }
}

const accounting = new Department("Accounting", 2011);
console.log("accounting =", accounting);

accounting.addEmployee("John Doe");
accounting.addEmployee("Anna Doe");

// accounting.employees[accounting.employees.length - 1] = "Martin"; // Property 'employees' is private and only accessible within class 'Department'

accounting.printEmployeesInformation();
console.log("accounting =", accounting);

console.log("-----------------------------");
