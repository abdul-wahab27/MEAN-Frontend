import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
  ) {}

  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:3000/login', { username, password })
  }
  signUp(user: User): Observable<any> {
    return this.http.post('http://localhost:3000/users', user);
  }
  logout() {
    localStorage.removeItem('token')
  }

  public isAuthenticated(): boolean {
    const authToken = JSON.parse(localStorage.getItem('token'))
    return authToken;
  }

  public get getToken() {
    return JSON.parse(localStorage.getItem('token') || null)
  }
}
