import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  // các phương thức khác 
  getList() : Observable<any> {
    return this.http.get<any>('http://localhost:4200/');

  }
  getById() : Observable<any> {
    return this.http.get<any>('http://localhost:4200/');



  }
}
