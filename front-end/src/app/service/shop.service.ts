import { logServeBack } from './../model/logServeBack';
import { Log } from './../model/log';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



const url = "http://localhost:3000/api/password";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  getLogs(): Observable<logServeBack>{
		return this.http.get(url).pipe(map(res => new logServeBack(res)));
  }
  
  addUser(user: Log): Observable<Log>{
		return this.http.post(url, user).pipe(map(res => new Log(res)));
	}

}
