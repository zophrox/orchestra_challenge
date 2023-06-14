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
    return JSON.parse(JSON.stringify(competitionsInfo));
  }

  getLaureatsInform(index: number) {
    return JSON.parse(JSON.stringify(competitionsInfo[index].laureatInfo));
  }
}
