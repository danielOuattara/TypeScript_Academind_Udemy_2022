abstract class Department_11 {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = []; // protected access modifier allows child class to access field
  static countryOfOrigin = "Russia";

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department_11): void;

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

class ITDepartment_11 extends Department_11 {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log(`ITDepartment_11 id(${this.id}): ${this.name}`);
  }
}

//-------------------------------------------------------------

class AccountingDepartment_11 extends Department_11 {
  private lastReport: string;
  private static instance: AccountingDepartment_11;

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment_11.instance) {
      return this.instance;
    }
    const accounting_11 = new AccountingDepartment_11("d2", []);
    return accounting_11;
  }

  describe() {
    console.log(`Accounting_11 id(${this.id}): ${this.name}`);
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

//------------------------------------------------
const accounting_11 = AccountingDepartment_11.getInstance();

accounting_11.addEmployee("Max");
accounting_11.addEmployee("Man");

// accounting_11.mostRecentReport; // before add report
accounting_11.recentReport = "new report"; //
accounting_11.addReport("Something went wrong...");
accounting_11.recentReport; // after add report

accounting_11.printReports();
accounting_11.printEmployeeInformation();

// const accounting_11Copy = { name: 'DUMMY', describe: accounting_11.describe };

// accounting_11Copy.describe();
