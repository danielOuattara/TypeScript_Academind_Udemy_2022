class Department_7 {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = []; // protected access modifier allows child class to access field

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department_7) {
    console.log(`Department_7 (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment_7 extends Department_7 {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment_7 extends Department_7 {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  // overriding parent class method
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it_Department_7 = new ITDepartment_7("d1", ["Max"]);

it_Department_7.addEmployee("Max");
it_Department_7.addEmployee("Manu");

// it_Department_7.employees[2] = 'Anna';

it_Department_7.describe();
it_Department_7.name = "NEW NAME";
it_Department_7.printEmployeeInformation();

console.log(it_Department_7);

const accounting_7 = new AccountingDepartment_7("d2", []);

accounting_7.addReport("Something went wrong...");

accounting_7.addEmployee("Max");
accounting_7.addEmployee("Man");

accounting_7.printReports();
accounting_7.printEmployeeInformation();

// const accounting_7Copy = { name: 'DUMMY', describe: accounting_7.describe };

// accounting_7Copy.describe();
