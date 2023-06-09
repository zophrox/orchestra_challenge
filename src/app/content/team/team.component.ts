import { Component, OnInit } from '@angular/core';
import { TeamInfo } from './team-inform/team-inform.interface';
import { TeamService } from './team.service';

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
