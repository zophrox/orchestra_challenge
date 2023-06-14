import { Injectable } from '@angular/core';
import { MastersCompetitionInfoInformList } from './master-competition-inform/masters-competition-inform.mock';

@Injectable({
  providedIn: 'root',
})
export class MastersCompetitionService {
  getInform() {
    return JSON.parse(JSON.stringify(MastersCompetitionInfoInformList));
  }
}
