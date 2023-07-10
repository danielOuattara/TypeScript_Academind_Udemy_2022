export {};

//--------------------------------------------------------------
// Shorthand syntax

class Department {
  private employees: string[] = [];

  constructor(private name: string, private year: number) {}

  describe(this: Department) {
    console.log(`Department title: ${this.name} since year ${this.year}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log("this.employees.length = ", this.employees.length);
    console.log("this.employees = ", this.employees);
  }
}

const accounting = new Department("Accounting", 2011);
console.log("accounting =", accounting);

accounting.addEmployee("John Doe");
accounting.addEmployee("Anna Doe");
accounting.describe();

accounting.printEmployeeInformation();

console.log("-----------------------------");
