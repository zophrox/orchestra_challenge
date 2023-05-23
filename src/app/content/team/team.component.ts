import { Component, OnInit } from '@angular/core';
import { TeamInform } from 'src/app/shared/team-inform.model';
import { InfoTeamService } from './info-team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit{
  infoTeam:TeamInform[]=[]
constructor(private infoTeamService:InfoTeamService){}

ngOnInit(){
 this.infoTeam = this.infoTeamService.getInform()
}

}
