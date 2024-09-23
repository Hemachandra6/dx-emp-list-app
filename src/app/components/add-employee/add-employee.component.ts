import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employeeService/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {

  employee: Employee = new Employee(0 , '', '', '', '', 0);
  submitted = false;

  constructor(private employeeService: EmployeeService, private router: Router) {}

  onSubmit() {
    this.employeeService.addEmployee(this.employee).subscribe(
      response => {
        console.log('Employee added successfully!', response);
        this.submitted = true;
        this.router.navigate(['/employees']);
      },
      error => {
        console.error('Error adding employee!', error);
      }
    );
  }

  resetForm() {
    this.employee = new Employee(0, '', '', '', '', 0);
    this.submitted = false;
  }
}
