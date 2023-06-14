import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArchiveService } from '../archive.service';
import { LaureatInfo } from './competitions-inform/laureat-info.interface';


@Component({
  selector: 'app-about-competition',
  templateUrl: './about-competition.component.html',
  styleUrls: ['./about-competition.component.scss'],
})
export class AboutCompetitionComponent implements OnInit {
  laureatsInfo!: LaureatInfo[];

  constructor(
    private archiveService: ArchiveService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.laureatsInfo = this.archiveService.getLaureatsInform(params['id']);
    });
  }
}
