import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionsInform } from 'src/app/shared/competitions-inform.model';
import { ArchiveService } from './archive.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent implements OnInit {
  apiLoaded = true;
  listArchiveCompetition: CompetitionsInform[] = [];
  constructor(private archiveService: ArchiveService, private router: Router) {}
  ngOnInit() {
    this.listArchiveCompetition = this.archiveService.getCompetitionsInform();
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
  competitionIndex(index: number) {
    this.router.navigate(['/about-competition', index]);
  }
}
