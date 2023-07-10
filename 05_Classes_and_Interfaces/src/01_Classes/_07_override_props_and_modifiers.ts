export {};

class Department {
  protected employees: string[] = []; // protected access modifier: allows child class to access private field

  constructor(private readonly id: string, public name: string) {}

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

//-------------------------------------------------------------------------

class ITDepartment extends Department {
  admins: string[];
  private superAdmins: string[] = [];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  getSuperAdmins() {
    console.log(this.superAdmins);
  }
}

const it_Department = new ITDepartment("d1", ["Max"]);

it_Department.addEmployee("Max");
it_Department.addEmployee("Manu");

// it_Department.employees[2] = 'Anna'; // Property 'employees' is protected and only accessible within class 'Department' and its subclasses.

it_Department.describe();
it_Department.name = "NEW NAME";
it_Department.printEmployeeInformation();

console.log(it_Department);

//-------------------------------------------------------------------------

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  // overriding parent class method using another logic
  addEmployee(name: string) {
    console.log("overloaded method");
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

const accounting = new AccountingDepartment("d2", []);

accounting.addReport("Something went wrong...");

accounting.addEmployee("Max");
accounting.addEmployee("Man");

accounting.printReports();
accounting.printEmployeeInformation();

// const accounting_7Copy = { name: 'DUMMY', describe: accounting.describe };

// accounting_7Copy.describe();
