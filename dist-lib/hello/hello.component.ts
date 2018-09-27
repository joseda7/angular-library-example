import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'otptest-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers: [ UsersService ]
})
export class HelloComponent implements OnInit {

  public daUsers:Array<any>;

  constructor(
    private _usersService: UsersService
  ){}

  ngOnInit() {

    this._usersService.getUsers().subscribe(
      result => {
        console.log(result);
        this.daUsers = result; 
      },
      error => {
        var errorMsj = <any>error;
        console.log(errorMsj);
      }
    );

  }

}
