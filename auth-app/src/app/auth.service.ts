import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _registerUrl = 'http://localhost:3000/api/register';

  constructor(private http: HttpClient) { }

  registerTeam(teamData) {
    return this.http.post<any>(this._registerUrl, teamData);
  }
}
