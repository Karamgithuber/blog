import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://localhost:7216/';
  constructor(private http: HttpClient) {
   }
  getEmployees(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Employees`);
  }
  getEmployee(id:string): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Employees`+ id);
  }
 deleteEmployee(id:string): Observable<any> {
    return this.http.delete(`${this.apiUrl}api/Employees`+ id);
  }
 updateEmployee(id:string ,data:any): Observable<any> {
    return this.http.put(`${this.apiUrl}api/Employees`+ id ,data);
  }

postEmployees(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Employees`, data);
  }
}
