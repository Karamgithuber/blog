import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
export const routes: Routes = [
{
  path:'',
  component: EmployeeListComponent
},
{
  path:'add-employee',
  component: AddEmployeeComponent
},
{
  path:'edit/:Id',
  component: EditEmployeeComponent
},
]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
