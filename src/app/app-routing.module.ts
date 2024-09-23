import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './services/authGuard/auth.guard';

const routes: Routes = [
  {path: "employees", component: EmployeeListComponent, canActivate: [authGuard]},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegistrationComponent}, 
  {path: "addEmployee", component: AddEmployeeComponent, canActivate: [authGuard]},
  {path: "updateEmployee/:empId", component: UpdateEmployeeComponent, canActivate: [authGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/employees'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
