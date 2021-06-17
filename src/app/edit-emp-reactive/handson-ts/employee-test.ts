import { Department } from './department';
import {Employee} from './employee'
import { Skill } from './skill';
export class EmployeeTest {
    constructor(private emp:Employee) {}
    display() {
        console.log(`id:${this.emp.id}`);
        console.log(`name: ${this.emp.name}`);
        console.log(`salary: ${this.emp.salary}`);
        console.log(`parmanent: ${this.emp.permanent}`);
        console.log(`department id: ${this.emp.department.id}`);
        console.log(`department name: ${this.emp.department.name}`);
        this.emp.skills.forEach((e)=>{
            console.log(`skill[${this.emp.skills.indexOf(e)}]:${e.id} ${e.name}`);
        })
    }
}

const dept: Department = {id:1,name:"Payroll"}
const skill:Skill[] = [
    {id:1,name:"HTML"},
    {id:2,name:"CSS"}, 
    {id:3,name:"JavaScript"}
]
const emp: Employee={
  id: "EM003",
  name : "John",
  permanent : true,
  salary : 10000,
  department: dept,
  skills: skill
};

new EmployeeTest(emp).display();