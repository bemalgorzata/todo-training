import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { TeamPageModule } from './pages/team.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';
import { ContactUsPageModule } from './pages/contact-us.page-module';
import { AdminPageModule } from './pages/admin.page-module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePageModule
  },
  {
    path: 'o-nas',
    loadChildren: () => AboutUsPageModule
  },

  {
    path: 'pracownik',
    loadChildren: () => TeamPageModule
  },
  {
    path: 'kontakt',
    loadChildren: () => ContactUsPageModule
  },
  {
    path: 'admin',
    loadChildren: () => AdminPageModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
