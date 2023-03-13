//--------------------------------------------------------------
//
// Shorthand syntax

class Department_4 {
  constructor(
    private name: string,
    private year: number,
    private employees: string[],
  ) {}

  describe(this: Department_4) {
    console.log(`Department_4 title: ${this.name} since year ${this.year}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log("this.employees.length = ", this.employees.length);
    console.log("this.employees = ", this.employees);
  }
}

const accounting_4 = new Department_4("Accounting_4", 2011, []);
console.log("accounting_4 =", accounting_4);

accounting_4.addEmployee("John Doe");
accounting_4.addEmployee("Anna Doe");
accounting_4.describe();

accounting_4.printEmployeeInformation();

console.log("-----------------------------");
