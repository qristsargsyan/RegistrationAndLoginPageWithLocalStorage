import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SystemManagmentModule } from './system-managment/system-managment.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SystemManagmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
