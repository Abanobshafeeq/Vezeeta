import { Directive, ElementRef, AfterViewInit, OnDestroy, PLATFORM_ID, Inject, WritableSignal, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollTracker]',
  standalone: true,
  exportAs: 'scrollTracker'
})
export class ScrollTrackerDirective implements AfterViewInit, OnDestroy {
  isVisible: WritableSignal<boolean> = signal(false);
  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible.set(true);
            // Optional: this.observer?.disconnect();
          }
        });
      }, {
        threshold: 0.15
      });

      this.observer.observe(this.el.nativeElement);
    } else {
        this.isVisible.set(true); 
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}