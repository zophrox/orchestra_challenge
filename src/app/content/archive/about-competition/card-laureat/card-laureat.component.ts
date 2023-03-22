import { Component, Input } from '@angular/core';
import { LaureatInfo } from 'src/app/shared/laureatInfo.model';

@Component({
  selector: 'app-card-laureat',
  templateUrl: './card-laureat.component.html',
  styleUrls: ['./card-laureat.component.scss'],
})
export class CardLaureatComponent {
  @Input() laureatInfo!: LaureatInfo;
}
