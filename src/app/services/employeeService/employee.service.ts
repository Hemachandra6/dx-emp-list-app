import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/dx-emp-list-api/v1/employees"

  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseUrl, employee);
  }

  deleteEmployee(empId: number): Observable<string> {
    console.log(`Id in employee service:` + `${this.baseUrl}/${empId}`);
    return this.httpClient.delete<string>(`${this.baseUrl}/${empId}`);
  }

  updateEmployee(empId: number, employee: Employee): Observable<Employee> {
    return this.httpClient.patch<Employee>(`${this.baseUrl}/${empId}`, employee);
  }

  getEmployeeById(empId: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${empId}`);
  }
}
