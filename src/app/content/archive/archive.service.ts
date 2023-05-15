import { Injectable } from '@angular/core';
import { CompetitionsInform } from 'src/app/shared/competitions-inform.model';

import { competitionsInfo } from './about-competition/laureat.data';

@Injectable({
  providedIn: 'root',
})
export class ArchiveService {
  constructor() {}

  competitions: CompetitionsInform[] = competitionsInfo;

  getCompetitionsInform() {
    return this.competitions.slice();
  }

  getLaureatsInform(index: number) {
    return this.competitions[index].laureatInfo.slice();
  }
}
