import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// import { CompetitionsInform } from 'src/app/shared/competitions-inform.model';
import { LaureatInfo } from 'src/app/shared/laureatInfo.model';

import { ArchiveService } from '../archive.service';

@Component({
  selector: 'app-about-competition',
  templateUrl: './about-competition.component.html',
  styleUrls: ['./about-competition.component.scss'],
})
export class AboutCompetitionComponent implements OnInit {
  laureatsInfo!: LaureatInfo[];

  constructor(private archiveService: ArchiveService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.laureatsInfo = this.archiveService.getLaureatsInform(params['id']);
    });
  }
}
