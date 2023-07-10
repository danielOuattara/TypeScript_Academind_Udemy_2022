export {};

//--------------------------------------------------------------
// Readonly

class Department {
  private employees: string[] = [];

  constructor(
    private readonly id: string,
    private name: string,
    public year: number,
  ) {}

  describe(this: Department) {
    console.log(
      `Department title: ${this.name} since year ${this.year}; id is ${this.id} }`,
    );
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
    // this.id = "d3"; // Cannot assign to 'id' because it is a read-only property.
  }

  printEmployeeInformation() {
    console.log("this.employees.length = ", this.employees.length);
    console.log("this.employees = ", this.employees);
  }
}

const accounting = new Department("123", "Accounting", 2012);
console.log("accounting =", accounting);

accounting.describe();

accounting.addEmployee("John Doe");
accounting.addEmployee("Anna Doe");

accounting.printEmployeeInformation();

console.log("-----------------------------");
