import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryContextStorageModule } from '@team';
import { NavbarComponentModule } from 'projects/navigation/src/public-api';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponentModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    InMemoryContextStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
