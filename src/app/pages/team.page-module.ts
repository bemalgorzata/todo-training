import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamPage } from './team.page';
import { TeamListComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/team-list.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TeamPage,
        }
      ]),
  TeamListComponentModule,
],
  	declarations: [TeamPage],
  	providers: [],
  	exports: [] })
export class TeamPageModule {
}
