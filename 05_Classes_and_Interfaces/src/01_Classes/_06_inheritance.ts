export {};
//--------------------------------------------------------------
// Inheritance

class Department {
  private employees: string[] = [];

  constructor(
    private readonly id: string,
    private name: string,
    public year: number,
  ) {}

  describe(this: Department) {
    console.log(
      `Department title: ${this.name} since year ${this.year}; id is ${this.id} }`,
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

//-----------------------------------------------------------------

class ITDepartment_0 extends Department {} // OK , as long as parent constructor is used

const itDepartment_0 = new ITDepartment_0("123", "IT_Department", 2009);
console.log("itDepartment_0 = ", itDepartment_0);

console.log("-----------------------------");

//------------------------------------------------------------------
// creating its own child constructor

class ITDepartment extends Department {
  constructor(
    id: string,
    name: string,
    year: number,
    private admins: string[],
  ) {
    super(id, name, year);
  }

  describeAdmins() {
    console.log(`Admins are ${this.admins}`);
  }
}

const itDepartment = new ITDepartment("123", "IT_Department", 2009, [
  "Daniel",
  "Julie",
]);

console.log("itDepartment = ", itDepartment);
console.log("-----------------------------");

itDepartment.describe();
itDepartment.addEmployee("Gaia");
itDepartment.addEmployee("Amaya");
itDepartment.printEmployeeInformation();
console.log("IT_Department =", itDepartment);
itDepartment.describeAdmins();
console.log("-----------------------------");

//-------------------------------------------------------------------

class AccountingDepartment extends Department {
  private reports: string[] = [];
  private admins: string[] = [];

  constructor(id: string, name: string, year: number) {
    super(id, name, year);
  }

  setAdmins(admins: string[]) {
    this.admins = admins;
  }

  describeAdmins() {
    console.log(`Admins are ${this.admins}`);
  }

  setReports(text: string) {
    this.reports.push(text);
  }

  printReport() {
    console.log("Reports : ", this.reports);
  }
}

const accountingDepartment = new AccountingDepartment(
  "344",
  "Accounting_Department",
  2010,
);

console.log("accountingDepartment = ", accountingDepartment);
console.log("-----------------------------");

accountingDepartment.setAdmins(["Stela", "Marcus"]);

accountingDepartment.describe();

accountingDepartment.addEmployee("Bob");
accountingDepartment.addEmployee("Martin");
accountingDepartment.printEmployeeInformation();
console.log("accounting Department =", accountingDepartment);

console.log("-----------------------------");

accountingDepartment.setReports("The payment is completed from client 1_253 ");
accountingDepartment.printReport();

accountingDepartment.setReports("The delivery for furniture is completed ");
accountingDepartment.printReport();
console.log("-----------------------------");
