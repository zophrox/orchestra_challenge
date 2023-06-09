import { Injectable } from '@angular/core';
import { teamInformList } from './team-inform/team-inform.mock';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  getInform() {
    return teamInformList.slice(); // shallow copy / deep copy
  }
}
