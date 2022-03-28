import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesPage } from './employees.page';
import { EmployeeDetailComponentModule, FirebaseEmployeesServiceModule } from '@team';

@NgModule({
  imports: [CommonModule, FirebaseEmployeesServiceModule, RouterModule.forChild([
    {
      path: '',
      component: EmployeesPage,
    }
  ]),
    EmployeeDetailComponentModule,
    FirebaseEmployeesServiceModule,],
  declarations: [EmployeesPage],
  providers: [],
  exports: []
})
export class EmployeesPageModule {
}
