export {};

class Department {
  protected employees: string[] = [];
  static countryOfOrigin = "Russia";

  constructor(private readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name };
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
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

//---------------------------------------------------------

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const it_Department = new ITDepartment("d1", ["Max"]);

it_Department.addEmployee("Max");
it_Department.addEmployee("Manu");

// it_Department.employees[2] = 'Anna';

it_Department.describe();
it_Department.name = "NEW NAME";
it_Department.printEmployeeInformation();

// console.log(it_Department);
console.log("-----------------------------------");

class AccountingDepartment extends Department {
  private lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
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

//------------------------------------------------
const accounting = new AccountingDepartment("d2", []);

accounting.addEmployee("Max");
accounting.addEmployee("Man");

// accounting.mostRecentReport; // before add report
accounting.recentReport = "new report"; //
accounting.addReport("Something went wrong...");
accounting.recentReport; // after add report

accounting.printReports();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();

console.log("-----------------------------------");
//------------------------------------------------
// static

const employee_1 = Department.createEmployee("Daniel");
console.log("employee_1 : ", employee_1); // { name: "Daniel"}
console.log(Department.countryOfOrigin); // Russia
