import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _registerUrl = 'http://localhost:3000/api/register';
  _loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient, private _router: Router) { }

  registerTeam(teamData) {
    return this.http.post<any>(this._registerUrl, teamData);
  }

  loginTeam(teamData) {
    return this.http.post<any>(this._loginUrl, teamData);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
