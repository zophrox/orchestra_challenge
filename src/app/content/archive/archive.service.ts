import { Injectable } from '@angular/core';
import { CompetitionsInform } from 'src/app/shared/competitions-inform.model';
import { LaureatInfo } from 'src/app/shared/laureatInfo.model';

@Injectable({
  providedIn: 'root',
})
export class ArchiveService {
  constructor() {}
  competitions: CompetitionsInform[] = [
    new CompetitionsInform('Зимовий конкурс 2022', 'RfQm0j6gzHQ', [
      new LaureatInfo(
        'Вася',
        'середня',
        'orchestra_logo.png',
        'Вася був парубок моторний',
        4
      ),
      new LaureatInfo(
        'Вася',
        'середня',
        'orchestra_logo.png',
        'Вася був парубок моторний',
        4
      ),
    ]),
    new CompetitionsInform('Якийсь там конкурс', 'RfQm0j6gzHQ'),
    new CompetitionsInform('Якийсь там конкурс', 'RfQm0j6gzHQ'),
  ];

  getCompetitionsInform() {
    return this.competitions.slice();
  }

  getCompetitionInform(index: number) {
    return this.competitions[index];
  }
}
