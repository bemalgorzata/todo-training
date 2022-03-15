import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesPage } from './employees.page';
import { EmployeeDetailComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/employee-detail.component-module';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    {
      path: '',
      component: EmployeesPage,
    }
  ]),
    EmployeeDetailComponentModule
  ],
  declarations: [EmployeesPage],
  providers: [],
  exports: []
})
export class EmployeesPageModule {
}
