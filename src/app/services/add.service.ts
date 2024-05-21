import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forum } from '../models/forum.model';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http: HttpClient) { }

   baseUrl = 'http://localhost:8085/api';

   createForum(forum: Forum): Observable<Forum> {
    return this.http.post<Forum>(`${this.baseUrl}`, forum);
  }

 getAllForums(): Observable<Forum[]> {
    return this.http.get<Forum[]>(`${this.baseUrl}`);
  }



}
