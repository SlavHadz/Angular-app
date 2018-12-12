import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm = {};

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      teamName: [''],
      password: [''],
      captain: this.fb.group({
        firstName: [''],
        lastName: [''],
        age: ['']
      }),
      numberOfPlayers: ['']
    });
  }

}
