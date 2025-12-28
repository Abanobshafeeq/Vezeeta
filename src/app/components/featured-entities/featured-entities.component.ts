import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FEATURED_ENTITIES, Entity } from '../../data/entitiy.data';

@Component({
  selector: 'app-featured-entities',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './featured-entities.component.html',
  styleUrl: './featured-entities.component.css',
})
export class FeaturedEntitiesComponent implements AfterViewInit {
  entities: Entity[] = FEATURED_ENTITIES;

  @ViewChild('swiperEl', { static: false }) swiperEl!: ElementRef;

  ngAfterViewInit(): void {
    setTimeout(() => {
      const swiperEl = this.swiperEl.nativeElement;
      
      const swiperParams = {
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        breakpoints: {
          0: { slidesPerView: 1.2, slidesPerGroup: 1, spaceBetween: 12 },
          480: { slidesPerView: 1.6, slidesPerGroup: 1, spaceBetween: 12 },
          640: { slidesPerView: 2.2, slidesPerGroup: 2, spaceBetween: 14 },
          768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 16 },
          1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 16 },
        },
      };
      
      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    }, 150);
  }
}
