import { Component, Input } from '@angular/core';
import { LaureatInfo } from '../competitions-inform/competitions-inform.interface';

@Component({
  selector: 'app-card-laureat',
  templateUrl: './card-laureat.component.html',
  styleUrls: ['./card-laureat.component.scss'],
})
export class CardLaureatComponent {
  @Input() laureatInfo!: LaureatInfo;
}
