import { Component, Input } from '@angular/core';
import { LaureatInfo } from '../competitions-inform/laureat-info.interface';




@Component({
  selector: 'app-card-laureat',
  templateUrl: './card-laureat.component.html',
  styleUrls: ['./card-laureat.component.scss'],
})
export class CardLaureatComponent {
  @Input() laureatInfo!: LaureatInfo;
}
