import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export type PromoCardVariant = 'light' | 'blue';

export type PromoCardData = {
  variant?: 'light' | 'blue';

  iconSrc?: string;
  showIconMobileOnly?: boolean;

  title: string;
  description: string;

  buttonText: string;
  buttonLink?: string;

  bgImageSrc?: string;
};

@Component({
  selector: 'app-ask-now',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ask-now.component.html',
  styleUrl: './ask-now.component.css',
})
export class AskNowComponent {
  @Input() data!: PromoCardData;
  @Output() ctaClick = new EventEmitter<void>();

  onCtaClick(e: Event) {
    e.preventDefault();
    this.ctaClick.emit();
  }

  get variant(): PromoCardVariant {
    return this.data?.variant ?? 'light';
  }
}
