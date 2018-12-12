import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService ) { }

  get teamName () {
    return this.registrationForm.get('teamName');
  }

  get password () {
    return this.registrationForm.get('password');
  }

  get firstName () {
    return this.registrationForm.get('captain.firstName');
  }

  get lastName () {
    return this.registrationForm.get('captain.lastName');
  }

  get age () {
    return this.registrationForm.get('captain.age');
  }

  get number() {
    return this.registrationForm.get('numberOfPlayers');
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      teamName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      captain: this.fb.group({
        firstName: ['', [Validators.required, Validators.maxLength(30)]],
        lastName: ['', [Validators.required, Validators.maxLength(30)]],
        age: ['', [Validators.required, Validators.maxLength(3)]]
      }),
      numberOfPlayers: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.authService.registerTeam(this.registrationForm.value)
        .subscribe(
          response => console.log('Success', response),
          error => console.error(error)
        );
  }

}
