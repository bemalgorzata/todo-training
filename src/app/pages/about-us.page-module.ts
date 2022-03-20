import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
import { TestComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/test.component-module';
import { FirebaseEmployeesServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-employees.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AboutUsPage,
        }
      ]),
  TestComponentModule,
  FirebaseEmployeesServiceModule
],
  	declarations: [AboutUsPage],
  	providers: [],
  	exports: [] })
export class AboutUsPageModule {
}
