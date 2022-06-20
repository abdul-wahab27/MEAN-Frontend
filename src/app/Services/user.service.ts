import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signUp(user: any) {
    return this.http.post('http://localhost:3000/users', user);
}
getAllUsers():Observable<any>{
  return this.http.get<any>('http://localhost:3000/users')
}

deleteUser(id:string):Observable<any>{
  return this.http.delete(`http://localhost:3000/users/${id}`)
}
getUser(id:string):Observable<any>{
  return this.http.get(`http://localhost:3000/users/${id}`)
}


}
