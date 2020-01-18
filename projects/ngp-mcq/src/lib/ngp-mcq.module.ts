import { NgModule } from '@angular/core';
import { NgpMcqComponent } from './ngp-mcq.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [NgpMcqComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [NgpMcqComponent]
})
export class NgpMcqModule { }
