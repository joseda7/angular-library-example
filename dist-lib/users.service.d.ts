import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export declare class UsersService {
    private _http;
    url: string;
    constructor(_http: Http);
    getUsers(): import("rxjs/Observable").Observable<any>;
}
