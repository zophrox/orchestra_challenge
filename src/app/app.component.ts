import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'orchestra_challenge';
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollOffset >= 20) {
      document.querySelectorAll('.header').forEach((c) => {
        c.classList.add('scroll-style');
        c.classList.remove('transparent-header');
      });
    } else {
      document.querySelectorAll('.header').forEach((c) => {
        c.classList.add('transparent-header');
        c.classList.remove('scroll-style');
      });
    }
  }
}
