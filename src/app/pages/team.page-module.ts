import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamPage } from './team.page';
import { FirebaseEmployeesServiceModule, TeamListComponentModule } from '@team';
import { EmployeeDetailsPageModule } from './employee-details.page-module';

@NgModule({
  imports: [CommonModule,
    FirebaseEmployeesServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: TeamPage,
      }, {
        path: ':employeeId',
        loadChildren: () => EmployeeDetailsPageModule
      }
    ]),
    TeamListComponentModule,
  ],
  declarations: [TeamPage],
  providers: [],
  exports: []
})
export class TeamPageModule {
}
