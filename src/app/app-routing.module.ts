import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { TeamPageModule } from './pages/team.page-module';

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
        path: 'team', 
        loadChildren: () => TeamPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
