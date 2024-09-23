import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employeeService/employee.service';
import { emit } from 'process';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[] = [];
  empId: number | undefined;
  
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }
  
  public deleteEmployee(empId: number) {
    this.employeeService.deleteEmployee(empId).subscribe({
      next: (response) => {
        console.log(`Employee deleted successfully!` + response);
        this.employees = this.employees.filter(employee => employee.empId !== empId);
      }, 
      error: (err) => {
        console.error('Error deleting employee:', err);
      }
    });
  }

  public updateEmployee(empId: number, employee: Employee) {
    this.employeeService.updateEmployee(empId, employee).subscribe({
      next: (response) => {
        console.log(`Employee updated successfully!` + response)
      }
    })
  }
}
