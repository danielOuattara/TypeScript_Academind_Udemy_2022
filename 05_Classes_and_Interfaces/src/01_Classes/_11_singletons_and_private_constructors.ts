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

// class ITDepartment extends Department {
//   admins: string[];

//   constructor(id: string, admins: string[]) {
//     super(id, "IT");
//     this.admins = admins;
//   }

//   describe() {
//     console.log(`ITDepartment id(${this.id}): ${this.name}`);
//   }
// }

//-------------------------------------------------------------

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    const accounting = new AccountingDepartment("d2", []);
    return accounting;
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
console.log("-----------------------------------");

//------------------------------------------------
const accounting = AccountingDepartment.getInstance();

accounting.addEmployee("Max");
accounting.addEmployee("Man");

// accounting.mostRecentReport; // before add report
accounting.recentReport = "new report"; //
accounting.addReport("Something went wrong...");
accounting.recentReport; // after add report

accounting.printReports();
accounting.printEmployeeInformation();
