//--------------------------------------------------------------
// Readonly

class Department_6 {
  private employees: string[] = [];

  constructor(
    private readonly id: string,
    private name: string,
    public year: number,
  ) {}

  describe(this: Department_6) {
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

//----------------------------

class ITDepartment extends Department_6 {
  constructor(
    id: string,
    name: string,
    year: number,
    private admins: string[],
  ) {
    super(id, name, year);
    this.admins = admins;
  }

  describeAdmins() {
    console.log(`Admins are ${this.admins}`);
  }
}

const itDepartment = new ITDepartment("123", "IT_Department", 2009, [
  "Daniel",
  "Julie",
]);

itDepartment.describe();
itDepartment.addEmployee("Gaia");
itDepartment.addEmployee("Amaya");
itDepartment.printEmployeeInformation();
console.log("IT_Department =", itDepartment);
console.log("-----------------------------");
//----------------------------

class AccountingDepartment extends Department_6 {
  private reports: string[] = [];
  private admins: string[] = [];

  constructor(id: string, name: string, year: number) {
    super(id, name, year);
    // this.admins = admins;
  }

  addAdmins(admins: string[]) {
    this.admins = admins;
  }

  describeAdmins() {
    console.log(`Admins are ${this.admins}`);
  }

  addReports(text: string) {
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

accountingDepartment.addAdmins(["Stela", "Marcus"]);

accountingDepartment.describe();

accountingDepartment.addEmployee("Bob");
accountingDepartment.addEmployee("Martin");
accountingDepartment.printEmployeeInformation();
console.log("accounting Department =", accountingDepartment);

accountingDepartment.addReports("The payment is completed from client 1_253 ");
accountingDepartment.printReport();

accountingDepartment.addReports("The delivery for furniture is completed ");
accountingDepartment.printReport();
console.log("-----------------------------");
