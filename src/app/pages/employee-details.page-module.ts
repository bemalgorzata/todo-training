import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsPage } from './employee-details.page';
import { EmployeeDetailComponentModule, FirebaseEmployeesServiceModule } from '@team';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeDetailsPage,
      }
    ]),
    EmployeeDetailComponentModule,
    FirebaseEmployeesServiceModule,
  ],
  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: []
})
export class EmployeeDetailsPageModule {
}
