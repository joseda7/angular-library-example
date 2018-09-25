import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OtptestModule } from './otptest/otptest.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OtptestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
