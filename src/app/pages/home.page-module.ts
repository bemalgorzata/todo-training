import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { TeamListComponentModule } from '@team';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      }
    ]),
    TeamListComponentModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: []
})
export class HomePageModule {
}
