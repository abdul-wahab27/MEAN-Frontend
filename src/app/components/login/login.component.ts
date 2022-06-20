import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup
  submitted = false;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const val = this.loginForm.value;
    this.submitted = true;
    if (val.username && val.password) {
      this.authService.login(val.username, val.password)
        .subscribe(
          (res) => {
            console.log("User is logged in", res);
            if (res && res?.token) {
              localStorage.setItem('token', JSON.stringify(res.token));
              console.log("Token is:", res.token);
              this.router.navigate(['/notes']);
            }
            else {
              alert("Invalid username or password")
            }
          }
        )
    }
  }
}




