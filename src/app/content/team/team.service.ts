import { Injectable } from '@angular/core';
import { teamInformList } from './team-inform/team-inform.mock';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  getInform() {
    return JSON.parse(JSON.stringify(teamInformList));
  }
}
