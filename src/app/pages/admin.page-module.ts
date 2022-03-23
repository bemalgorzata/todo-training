import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';
import { CreateEmployeeComponentModule, FirebaseEmployeesServiceModule } from '@team';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminPage,
      },
    ]),
    CreateEmployeeComponentModule,
    FirebaseEmployeesServiceModule
  ],
  declarations: [AdminPage],
  providers: [],
  exports: []
})
export class AdminPageModule {
}
