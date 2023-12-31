import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employee.service";
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  myEmployees: any;
  constructor(private employees: EmployeeService) {

  }

  ngOnInit(): void {
    this.getEpmloyees();
  }
  getEpmloyees() {
    this.employees.getEmployees().subscribe(
      (data) => {
        this.myEmployees = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
