var Department = /** @class */ (function () {
    function Department(deptName, deptYear) {
        var _this = this;
        this.describe_2 = function () {
            console.log("Department title: ", _this.name);
        };
        this.name = deptName;
        this.year = deptYear;
    }
    Department.prototype.describe = function () {
        console.log("Department title: ", this.name);
    };
    return Department;
}());
var accounting = new Department("Accounting", 2011);
console.log("accounting: ", accounting);
accounting.describe(); // department: Accounting
/* interesting thing about the "this" keyword !
---------------------------------------------*/
var accountingCopy = { describe: accounting.describe };
accountingCopy.describe(); // department: Undefined
/* what happened ?
- 'this' refers to the 'instance' that called 'name' property
- accountingCopy is an object that does not have a name property
- so undefined is returned */
console.log("-----------------------------");
//--------------------------------------------------------------
var Department_2 = /** @class */ (function () {
    function Department_2(deptName, deptYear) {
        this.name = deptName;
        this.year = deptYear;
    }
    Department_2.prototype.describe = function () {
        console.log("Department Title: ", this.name);
    };
    return Department_2;
}());
var accounting_2 = new Department_2("Accounting_2", 2011);
accounting_2.describe();
var accounting_2_copy = {
    name: "accounting copy",
    year: 2001,
    describe: accounting_2.describe,
};
accounting_2_copy.describe();
console.log("-----------------------------");
