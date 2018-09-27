import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
    public url: string;

    constructor( private _http:Http ){
        this.url = "https://jsonplaceholder.typicode.com/users";
    }

    getUsers() {
        return this._http.get(this.url)
            .map(res => res.json());
    }
}
