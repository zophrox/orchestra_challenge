import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent {
  constructor(private router:Router){}
  onApply(){
    this.router.navigate(['https://docs.google.com/forms/d/e/1FAIpQLSc7pzJD7AczFRUl5fW6val5Wbani8V5EYhpLJbLTJils88YSg/alreadyresponded'])
  }

}
