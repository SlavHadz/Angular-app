import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams;

  constructor(private teamsService: TeamsService, private router: Router) { }

  ngOnInit() {
    this.teamsService.getTeams()
      .subscribe(
        response => {
          this.teams = response.teams;
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.router.navigate(['/login']);
            }

            if (error.status === 500) {
              this.router.navigate(['/login']);
            }
          }
        }
      );
  }



}
