import { Injectable } from '@angular/core';
import { competitionsInfo } from './about-competition/competitions-inform/competitions-inform.mock';
import { CompetitionsInform } from './about-competition/competitions-inform/competitions-inform.interface';
@Injectable({
  providedIn: 'root',
})
export class ArchiveService {
  constructor() {}

  competitions: CompetitionsInform[] = competitionsInfo;

  getCompetitionsInform() {
    return this.competitions.slice();
    // return JSON.parse(JSON.stringify(competitionsInfo));
  }

  getLaureatsInform(index: number) {
    return this.competitions[index].laureatInfo.slice();
    // return JSON.parse(JSON.stringify(competitionsInfo[index].laureatInfo));
  }
}
