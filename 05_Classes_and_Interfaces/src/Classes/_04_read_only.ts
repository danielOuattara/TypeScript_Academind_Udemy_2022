//--------------------------------------------------------------
// Readonly

class Department_5 {
  constructor(
    private readonly id: string,
    private name: string,
    public year: number,
    private employees: string[],
  ) {}

  describe(this: Department_5) {
    console.log(
      `Department_5 title: ${this.name} since year ${this.year}; id is ${this.id} }`,
    );
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log("this.employees.length = ", this.employees.length);
    console.log("this.employees = ", this.employees);
  }
}

const accounting_5 = new Department_5("123", "Accounting_5", 2012, []);
console.log("accounting_5 =", accounting_5);

accounting_5.describe();

accounting_5.addEmployee("John Doe");
accounting_5.addEmployee("Anna Doe");

accounting_5.printEmployeeInformation();

console.log("-----------------------------");
