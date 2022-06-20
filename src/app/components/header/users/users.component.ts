import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  Users:any
  editMode:Boolean=false
  signUpForm:FormGroup
  constructor(private http:UserService,
              private auth:AuthService) { }

  ngOnInit(): void {
    this.http.getAllUsers()
    .subscribe(data =>{
      console.log(data)
      this.Users = data
    })

  }
  logout() {
    this.auth.logout()
  }

  deleteUser(i:number,id:string){
    this.Users.splice(i,1)
    this.http.deleteUser(id)
    .subscribe(res => {
      console.log(res)
    })
  }


  }

