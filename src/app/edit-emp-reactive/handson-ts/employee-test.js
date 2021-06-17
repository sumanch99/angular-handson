"use strict";
exports.__esModule = true;
exports.EmployeeTest = void 0;
var EmployeeTest = /** @class */ (function () {
    function EmployeeTest(emp) {
        this.emp = emp;
    }
    EmployeeTest.prototype.display = function () {
        var _this = this;
        console.log("id:" + this.emp.id);
        console.log("name: " + this.emp.name);
        console.log("salary: " + this.emp.salary);
        console.log("parmanent: " + this.emp.permanent);
        console.log("department id: " + this.emp.department.id);
        console.log("department name: " + this.emp.department.name);
        this.emp.skills.forEach(function (e) {
            console.log("skill[" + _this.emp.skills.indexOf(e) + "]:" + e.id + " " + e.name);
        });
    };
    return EmployeeTest;
}());
exports.EmployeeTest = EmployeeTest;
var dept = { id: 1, name: "Payroll" };
var skill = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" }
];
var emp = {
    id: "EM003",
    name: "John",
    permanent: true,
    salary: 10000,
    department: dept,
    skills: skill
};
new EmployeeTest(emp).display();
