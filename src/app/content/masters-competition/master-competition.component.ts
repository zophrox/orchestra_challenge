import { Component, OnInit } from '@angular/core';
import { MastersCompetitionService } from './masters-competition.service';
import { MasterCompetitionInfo } from './master-competition-inform/master-competition-inform.interface';

@Component({
  selector: 'app-master-competition',
  templateUrl: './master-competition.component.html',
  styleUrls: ['./master-competition.component.scss'],
})
export class MasterCompetitionComponent implements OnInit {
  infoTeam: MasterCompetitionInfo[] = [];
  constructor(private mastersCompetitionService: MastersCompetitionService) {}
  ngOnInit() {
    this.infoTeam = this.mastersCompetitionService.getInform();
  }
}
