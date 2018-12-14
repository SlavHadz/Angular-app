import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      teamName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.auth.loginTeam(this.loginForm.value)
      .subscribe(
        response => {
          console.log('Logged in');
          localStorage.setItem('token', response.token);
          this.router.navigate(['/teams']);
        },
        error => {
          console.error(error);
        }
      );
  }


}
