import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from './handson-ts/employee';
import { Department } from './handson-ts/department';
import { Skill } from './handson-ts/skill';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dept: Department[] = [{id:1,name:"Payroll"},{id:2,name:"FSE"},{id:3,name:"Testing"}];
  
  skill:Skill[] = [
    {id:1,name:"HTML"},
    {id:2,name:"CSS"}, 
    {id:3,name:"JavaScript"}
  ]
  employee: Employee={
    id: "EM003",
    name : "John",
    permanent : true,
    salary : 10000,
    department:this.dept[0],
    skills: this.skill
  };

  empForm = new FormGroup({ 
      'name': new FormControl(this.employee.name, [ 
        Validators.required, 
        Validators.minLength(4), 
        Validators.maxLength(20) 
      ]) ,
    'department':new FormControl(this.employee.department,[
      Validators.required
    ])
    }); 
  name = new FormControl(this.employee.name);
  department = new FormControl(this.employee.department);
  getName() { 
    return this.empForm.get('name'); 
  }
  getDepartment(){
    return this.empForm.get('department');
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.empForm.value);
  }
}
