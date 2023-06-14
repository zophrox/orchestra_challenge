import { Component, OnInit } from '@angular/core';
import { TeamService } from './team.service';
import { TeamInfo } from './team-inform/team-inform.interface';
// import { TeamInfo } from './team-inform/team-inform.mock';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  infoTeam: TeamInfo[] = [];
  constructor(private teamService: TeamService) {}
  ngOnInit() {
    this.infoTeam = this.teamService.getInform();
  }
}
