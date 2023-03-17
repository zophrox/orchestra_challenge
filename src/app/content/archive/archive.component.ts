import { Component, OnInit } from '@angular/core';
import { CompetationsInform } from 'src/app/shared/competations_inform.model';
import { ArchiveService } from './archive.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent implements OnInit {
  apiLoaded = true;
  listArchiveCompetition: CompetationsInform[] = [];
  constructor(private archiveService: ArchiveService) {}
  ngOnInit() {
    this.listArchiveCompetition = this.archiveService.getCompetitionsInform();
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}
