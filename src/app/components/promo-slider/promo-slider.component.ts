// promo-slider.component.ts
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

export type PromoSlideItem = {
  imageSrc: string;
  title: string;
  oldPrice?: string;
  newPrice?: string;
  offersText?: string;
  badgeText?: string;
  link?: string;
};

@Component({
  selector: 'app-promo-slider',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './promo-slider.component.html',
  styleUrl: './promo-slider.component.css',
})
export class PromoSliderComponent implements AfterViewInit {
  @Input() sectionTitle = '';
  @Input() sectionLinkText = 'All offers';
  @Input() sectionLinkHref: string | null = null;
  @Input() items: PromoSlideItem[] = [];
  @Input() hideArrow = false;

  @ViewChild('track') track!: ElementRef<HTMLDivElement>;

  private step = 0;
  private readonly itemsPerClick = 4;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  get showRightArrow(): boolean {
    if (this.hideArrow) return false;
    return !!this.sectionLinkHref && this.items?.length > 4;
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const track = this.track.nativeElement;
    const card = track.querySelector('.promo-card') as HTMLElement;
    if (!card) return;

    const gap = parseFloat(getComputedStyle(track).gap) || 16;
    this.step = card.offsetWidth + gap;
  }

  scroll(dir: 1 | -1): void {
    if (!this.step) return;

    const track = this.track.nativeElement;
    const max = track.scrollWidth - track.clientWidth;

    const target = Math.min(
      Math.max(track.scrollLeft + dir * this.step * this.itemsPerClick, 0),
      max
    );

    track.scrollTo({ left: target, behavior: 'smooth' });
  }
}
