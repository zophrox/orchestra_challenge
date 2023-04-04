import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollOffset >= 120) {
      document.querySelectorAll('.header').forEach((c) => {
        c.classList.add('scroll-style');
        c.classList.remove('transparent-header')

      });
    } else {
      document.querySelectorAll('.header').forEach((c) => {
        c.classList.add('transparent-header')
        c.classList.remove('scroll-style')
        
      });
    }
  }
}
