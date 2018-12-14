import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  _teamsUrl = 'http://localhost:3000/api/teams';

  getTeams() {
    return this.http.get<any>(this._teamsUrl);
  }
}
