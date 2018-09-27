import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { UsersService } from './users.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [HelloComponent],
  exports: [HelloComponent]
})
export class OtptestModule {
  static forRoot(){
   return {
     ngModule: OtptestModule,
     providers: [ UsersService ]
   } 
  }
 }
