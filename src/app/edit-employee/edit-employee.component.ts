import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  AddEmp: FormGroup;
  myData: any;
  Id: any;

  constructor(private route: ActivatedRoute ,public emp :EmployeeService ,private fb: FormBuilder) { 
    this.AddEmp = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      salary: ['', Validators.required],
      department: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Access individual parameters using the 'params' object
       this.Id = params['Id'];
      if(this.Id){
        this.emp.getEmployee(this.Id).subscribe(
          (Response)=>{
            this.myData  =Response;
            this.patchModelInForms();
          }
        )
      }
    });
  }

  patchModelInForms() {
    // this.AddEmp.Id
    this.AddEmp.patchValue(this.myData);
  }
  onSubmit() {
    this.emp.updateEmployee(this.AddEmp.value.id,this.AddEmp.value).subscribe((responce)=>{
      alert("done");
      this.AddEmp.reset();
    });

  }

}
