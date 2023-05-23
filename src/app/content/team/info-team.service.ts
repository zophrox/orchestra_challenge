import { Injectable } from '@angular/core';
import { TeamInform } from 'src/app/shared/team-inform.model';
// interface TeamInfo {
//   name: string;
//   descriptions: string;
//   images: string;
// }
@Injectable({
  providedIn: 'root',
})
export class InfoTeamService {
  aboutCoach:TeamInform[]=[
   new TeamInform('Кунтий Олег','Диригент НАОНІ','assets/team/Oleh_Kuntyy.JPG'),
   new TeamInform('Кунтий Олег','Диригент НАОНІ','team/Oleh_Kuntyy.JPG'),
   new TeamInform('Кунтий Олег','Диригент НАОНІ','team/Oleh_Kuntyy.JPG'),
    
  ]
  getInform(){
    return this.aboutCoach.slice()
  }
}
