import { Component } from '@angular/core';

@Component({
  selector: 'app-apply-competition-form',
  templateUrl: './apply-competition-form.component.html',
  styleUrls: ['./apply-competition-form.component.scss'],
})
export class ApplyCompetitionFormComponent {
  onApply() {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSc7pzJD7AczFRUl5fW6val5Wbani8V5EYhpLJbLTJils88YSg/alreadyresponded'
    ,"_blank");
  }
}
