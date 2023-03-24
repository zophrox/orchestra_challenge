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
        'Середня',
        'orchestra_logo.png',
        'Вася був парубок моторний',
        'Бандура',
        "Лауреат першої премії"
      ),
      new LaureatInfo(
        'Петя',
        'Старша',
        'orchestra_logo.png',
        'Петя був парубок моторний',
        'Aкордеон',
        "Лауреат другої премії"
        
      ),
      new LaureatInfo(
        'Петя',
        'Молодша',
        'orchestra_logo.png',
        'Петя був парубок моторний',
        'Тромбон',
        "Лауреат третьої премії"
      ),
    ]),
    new CompetitionsInform('Зимовий конкурс 2023', 'RfQm0j6gzHQ', [
      new LaureatInfo(
        'Олег',
        'Старша',
        'orchestra_logo.png',
        'Вася був парубок моторний',
        'Сопілка',
        "Лауреат першої премії"
      ),
      new LaureatInfo(
        'Дмитро',
        'Молодша',
        'orchestra_logo.png',
        'Петя був парубок моторний',
        'Ліра',
        "Лауреат другої премії"
      ),
    ]),
  ];

  getCompetitionsInform() {
    return this.competitions.slice();
  }

  getLaureatsInform(index: number) {
    return this.competitions[index].laureatInfo.slice();
  }
}
