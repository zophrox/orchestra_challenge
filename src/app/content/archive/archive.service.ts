import { Injectable } from '@angular/core';
import { CompetationsInform } from 'src/app/shared/competations_inform.model';


@Injectable({
  providedIn: 'root',
})
export class ArchiveService {
  constructor() {}
  competitions:CompetationsInform[]=[new CompetationsInform("Зимовий конкурс 2022",'RfQm0j6gzHQ'),new CompetationsInform("Якийсь там конкурс",'RfQm0j6gzHQ'),new CompetationsInform("Якийсь там конкурс",'RfQm0j6gzHQ')]
  getCompetitionsInform(){
    return this.competitions.slice()
  }
}
