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
   new TeamInform('Кунтий Олег','Диригент НАОНІ    asdfasdfasdfasdfasdf asdfasdf asdfasdfas ;lkj;lkj;lk ;lkj;lk j;lkj;lkj;lkj ;l kj;lk kj kjk ;lkjk l;lkj ','assets/team/Kuntyy.jpg'),
   new TeamInform('Олесь Журавчак','Диригент НАОНІ','assets/team/juravchak.jpg'),
   new TeamInform('Олександр Жищенко','Диригент НАОНІ','assets/team/gyschenco.jpg'),
   new TeamInform('Тарас Столяр','Диригент НАОНІ','assets/team/stolar.jpg'),
   new TeamInform('Ігор Брухаль','Диригент НАОНІ','assets/team/bruchal.jpg'),   
   new TeamInform('Любомир Матейко','Диригент НАОНІ','assets/team/mateyko.jpg'),
   new TeamInform('Назар Павленко','Диригент НАОНІ','assets/team/pavlenko.jpg'),
   new TeamInform('Олег Микитюк','Диригент НАОНІ','assets/team/mykytuk.jpg'),
   new TeamInform('Денис Савельєв','Диригент НАОНІ','assets/team/savelev.jpg'),
   new TeamInform('Нікіта Рубченко','Диригент НАОНІ','assets/team/rubchenko.jpg'),
   new TeamInform('Петро Січко','Диригент НАОНІ','assets/team/sichko.jpg'),
   new TeamInform('Андій Бобрик','Диригент НАОНІ','assets/team/bobryk.jpg'),

    
  ]
  getInform(){
    return this.aboutCoach.slice()
  }
}
