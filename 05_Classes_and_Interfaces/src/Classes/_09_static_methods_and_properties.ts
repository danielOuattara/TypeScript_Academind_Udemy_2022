class Department_9 {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = []; // protected access modifier allows child class to access field
  static countryOfOrigin = "Russia";

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name };
  }

  describe(this: Department_9) {
    console.log(`Department_9 (${this.id}): ${this.name}`);
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

class ITDepartment_9 extends Department_9 {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment_9 extends Department_9 {
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
console.log("-----------------------------------");
//-----------------------------------------------
// const it_Department_9 = new ITDepartment_9("d1", ["Max"]);

// it_Department_9.addEmployee("Max");
// it_Department_9.addEmployee("Manu");

// // it_Department_9.employees[2] = 'Anna';

// it_Department_9.describe();
// it_Department_9.name = "NEW NAME";
// it_Department_9.printEmployeeInformation();

// console.log(it_Department_9);
console.log("-----------------------------------");
//------------------------------------------------
const accounting_9 = new AccountingDepartment_9("d2", []);

accounting_9.addEmployee("Max");
accounting_9.addEmployee("Man");

// accounting_9.mostRecentReport; // before add report
accounting_9.recentReport = "new report"; //
accounting_9.addReport("Something went wrong...");
accounting_9.recentReport; // after add report

accounting_9.printReports();
accounting_9.printEmployeeInformation();

// const accounting_9Copy = { name: 'DUMMY', describe: accounting_9.describe };

// accounting_9Copy.describe();

console.log("-----------------------------------");
//------------------------------------------------
// static

const employee_1 = Department_9.createEmployee("Daniel");
console.log("employee_1", employee_1); // { name: "Daniel"}
console.log(Department_9.countryOfOrigin); // Russia
