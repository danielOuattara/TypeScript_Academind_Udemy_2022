export {};

abstract class Department {
  protected employees: string[] = [];
  static countryOfOrigin = "Russia";

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

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

//-------------------------------------------------------------

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log(`ITDepartment id(${this.id}): ${this.name}`);
  }
}

console.log("-----------------------------------");
const it_Department_10 = new ITDepartment("d1", ["Max"]);

it_Department_10.addEmployee("Max");
it_Department_10.addEmployee("Manu");

// it_Department_10.employees[2] = 'Anna';

it_Department_10.describe();
it_Department_10.name = "NEW NAME";
it_Department_10.printEmployeeInformation();

console.log(it_Department_10);

//-------------------------------------------------------------

class AccountingDepartment extends Department {
  private lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe() {
    console.log(`Accounting id(${this.id}): ${this.name}`);
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
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  get recentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report found");
  }

  set recentReport(input: string) {
    if (!input) {
      throw new Error("Please enter a valid input !");
    }
    this.addReport(input);
  }
}

const accounting_10 = new AccountingDepartment("d2", []);

accounting_10.addEmployee("Max");
accounting_10.addEmployee("Man");

// accounting_10.mostRecentReport; // before add report
accounting_10.recentReport = "new report"; //
accounting_10.addReport("Something went wrong...");
accounting_10.recentReport; // after add report

accounting_10.printReports();
accounting_10.printEmployeeInformation();

// const accounting_10Copy = { name: 'DUMMY', describe: accounting_10.describe };

// accounting_10Copy.describe();

console.log("-----------------------------------");
//------------------------------------------------
// static

const employee_10 = Department.createEmployee("Daniel");
console.log("employee_10", employee_10); // { name: "Daniel"}
console.log(Department.countryOfOrigin); // Russia
