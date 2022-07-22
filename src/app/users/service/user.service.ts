import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}


  public getListUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  
}
