class Department_8 {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = []; // protected access modifier allows child class to access field

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department_8) {
    console.log(`Department_8 (${this.id}): ${this.name}`);
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

class ITDepartment_8 extends Department_8 {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment_8 extends Department_8 {
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

//-----------------------------------------------
// const it_Department_8 = new ITDepartment_8("d1", ["Max"]);

// it_Department_8.addEmployee("Max");
// it_Department_8.addEmployee("Manu");

// // it_Department_8.employees[2] = 'Anna';

// it_Department_8.describe();
// it_Department_8.name = "NEW NAME";
// it_Department_8.printEmployeeInformation();

// console.log(it_Department_8);

//-----------------------------------------------
const accounting_8 = new AccountingDepartment_8("d2", []);

accounting_8.addEmployee("Max");
accounting_8.addEmployee("Man");

// accounting_8.mostRecentReport; // before add report
accounting_8.recentReport = "new report"; //
accounting_8.addReport("Something went wrong...");
accounting_8.recentReport; // after add report

accounting_8.printReports();
accounting_8.printEmployeeInformation();

// const accounting_8Copy = { name: 'DUMMY', describe: accounting_8.describe };

// accounting_8Copy.describe();
