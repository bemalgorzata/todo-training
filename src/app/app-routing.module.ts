import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { KontaktPageModule } from './pages/kontakt.page-module';

const routes: Routes = [{ 
        path: 'onas', 
        loadChildren: () => AboutUsPageModule
      },
  { 
        path: 'kontakt', 
        loadChildren: () => KontaktPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
