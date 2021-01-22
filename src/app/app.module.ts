import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Column1Component } from './column1/column1.component';
import { Column2Component } from './column2/column2.component';
import { Column3Component } from './column3/column3.component';

@NgModule({
  declarations: [
    AppComponent,
    Column1Component,
    Column2Component,
    Column3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
