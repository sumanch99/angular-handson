import { Component, OnInit } from "@angular/core";
import { addressModel } from "./addressModel";

@Component({   
    selector: 'app-template-driven-form',   
    templateUrl: './template-driven-form.component.html',   
    styleUrls: ['./template-driven-form.component.css']   
  })   
  export class TemplateDrivenFormComponent implements OnInit {   
     
    countryData: any[] = ['India', 'US', 'UK'];   
     
    model: addressModel = {   
      address: '',   
      city: '',   
      state:'',   
      postcode: 0,   
      country: [],   
      aggrement: false   
    };   
     
    constructor() { }   
     
    ngOnInit() {   
    }   
     
    onFormSubmit(f:any) {
      this.model=f.value;
      console.log("Full Address", this.model);     
    }
  }  