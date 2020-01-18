import { NgpMcqModule } from 'ngp-mcq';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgpMcqModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
