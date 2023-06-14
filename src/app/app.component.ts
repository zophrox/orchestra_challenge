import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('headerRef') headerRef!: ElementRef;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject('Window') private window: Window
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset =
      this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;

    if (scrollOffset >= 20) {
      this.renderer.addClass(this.headerRef.nativeElement, 'scroll-style');
      this.renderer.removeClass(this.headerRef.nativeElement, 'transparent-header');
    } else {
      this.renderer.addClass(this.headerRef.nativeElement, 'transparent-header');
    }
  }
}
