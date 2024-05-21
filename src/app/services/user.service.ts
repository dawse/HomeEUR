import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {AuthenticationRequest, AuthenticationResponse, User} from "../models/User";
import {Observable, tap, throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'http://localhost:8075/authentication';
  private URL1 = 'http://localhost:8075/user';


  constructor(private http: HttpClient) {
  }

  register(registerRequest: any) {
    return this.http.post<User>(`${this.URL}/register`, registerRequest);
  }

  sendCode(email: string) {
    return this.http.post(`${this.URL}/send-code`, email);
  }

  verifyCode(email: string, code: number) {
    const body = {
      email: email,
      code: code
    };
    return this.http.post(`${this.URL}/verify-code`, body);
  }

  //sans cookie
  authenticate(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.URL}/authenticate`, request);
  }


  uploadLogo(file: File, email: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('email', email);
    return this.http.post(`${this.URL1}/uploadLogo`, formData);
  }

  getUserLogo(email: string): Observable<any> {
    const url = `${this.URL1}/${email}/logo`;
    return this.http.get(url, {responseType: 'blob'});
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL1);
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.URL1}/show-user/${id}`;
    return this.http.get<User>(url);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.URL1}/remove-user/${id}`, {responseType: 'text'});
  }




  forgotPassword(email: string) {
    return this.http.post(`${this.URL}/forgot-password`, {email}, {responseType: 'text'});
  }





  getUsers(spec: string, sort: string): Observable<User[]> {
    const url = `http://localhost:8075/user/recherche-avancee?spec=${spec}&sort=${sort}`;
    return this.http.get<User[]>(url);
  }

  sendMail(to: string, subject: string, body: string) {
    const formData = new FormData();
    formData.append('to', to);
    formData.append('subject', subject);
    formData.append('body', body);
    return this.http.post('http://localhost:8075/mail/send-from-HS', formData);
  }





  updatePassword(email: string, oldPassword: string, newPassword: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = {email: email, oldPassword: oldPassword, newPassword: newPassword};
    return this.http.post('http://localhost:8075/authentication/update-password', body, {headers: headers});
  }

  getUserByEmail(email: string): Observable<User> {
    const url = `${this.URL1}/email/${email}`;
    return this.http.get<User>(url);
  }

}
