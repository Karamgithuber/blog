import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  AddEmp: FormGroup;
  skills: any;

   constructor(private fb: FormBuilder ,public employeeService:EmployeeService) {
    this.AddEmp = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      salary: ['', Validators.required],
      department: ['', Validators.required],
      employeeSkills: ['',[]],
    });
  }

  ngOnInit(): void {
    this.employeeService.getSkills().subscribe((Response)=>{
      this.skills =Response
    })
  }
  onSubmit() {
     // Call the postEmployees method from the service
     const formData =this.AddEmp.value
     this.employeeService.postEmployees(formData).subscribe(
      (response) => {
        // Handle success, e.g., show a success message
        alert('Employee added successfully');
        this.AddEmp.reset();
      },
      (error) => {
        // Handle error, e.g., show an error message
        console.error('Error adding employee:', error);
      }
    )
    // this.AddEmp.reset();
  }

}
