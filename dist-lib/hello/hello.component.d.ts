import { OnInit } from '@angular/core';
import { UsersService } from '../users.service';
export declare class HelloComponent implements OnInit {
    private _usersService;
    daUsers: Array<any>;
    constructor(_usersService: UsersService);
    ngOnInit(): void;
}
