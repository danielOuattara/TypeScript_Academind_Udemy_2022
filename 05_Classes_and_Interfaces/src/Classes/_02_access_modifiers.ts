//--------------------------------------------------------------
//
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

  printEmployeesInformation() {
    console.log("this.employees.length = ", this.employees.length);
    console.log("this.employees = ", this.employees);
  }
}

const accounting_3 = new Department_3("Accounting_3", 2011);
console.log("accounting_3 =", accounting_3);

accounting_3.addEmployee("John Doe");
accounting_3.addEmployee("Anna Doe");

accounting_3.printEmployeesInformation();
console.log("accounting_3 =", accounting_3);

console.log("-----------------------------");
