import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) {}


  public getFeeds(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  
}
