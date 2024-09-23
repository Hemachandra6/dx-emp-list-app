import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employeeService/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.scss'
})
export class UpdateEmployeeComponent implements OnInit {

  empId!: number;
  employee: Employee = new Employee();
  submitted = false;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(`Inside updateCom`)
    this.empId = +this.route.snapshot.paramMap.get('empId')!;
    this.employeeService.getEmployeeById(this.empId).subscribe({
      next: (data: Employee) => {
        this.employee = data;
      }, 
      error: (err) => {
        console.error('Error fetching employee:', err);
      }
    });
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.empId, this.employee).subscribe({
      next: (response) => {
        console.log('Employee updated successfully:', response);
        this.router.navigate(['/employees']);
      },
      error: (err) => {
        console.error(`Error updating employee:`, err);
      }
    })
  }
}
