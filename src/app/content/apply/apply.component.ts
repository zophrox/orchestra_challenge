import { Component } from '@angular/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss'],
})
export class ApplyComponent {
  onApply() {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSc7pzJD7AczFRUl5fW6val5Wbani8V5EYhpLJbLTJils88YSg/alreadyresponded'
    ,"_blank");
  }
}
