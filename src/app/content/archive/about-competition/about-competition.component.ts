import { Component, OnInit } from '@angular/core';
import { CompetitionsInform } from 'src/app/shared/competitions-inform.model';

import { ArchiveService } from '../archive.service';

@Component({
  selector: 'app-about-competition',
  templateUrl: './about-competition.component.html',
  styleUrls: ['./about-competition.component.scss'],
})
export class AboutCompetitionComponent implements OnInit {
  laureatInfo!:CompetitionsInform;
  id:number = 0;
  constructor(private archiveService: ArchiveService) {}

  ngOnInit() {
    // this.laureatInfo = this.archiveService.getCompetitionInform(1);
  }
}
