import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { DOCTORS, SPECIALTIES } from '../../data/doctors.data';
import { Doctor } from '../../models/doctor';
@Component({
  selector: 'app-featured-doctors',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './featured-doctors.component.html',
  styleUrls: ['./featured-doctors.component.scss'],
})
export class FeaturedDoctorsComponent implements OnInit, AfterViewInit {
  specialties = SPECIALTIES;
  doctors: Doctor[] = DOCTORS;
  filteredDoctors: Doctor[] = [];
  activeSpecialty = 0;

  doctorPairs: Doctor[][] = [];

  @ViewChild('swiperEl') swiperEl!: ElementRef;
  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const swiperEl: any = this.swiperEl.nativeElement;

    Object.assign(swiperEl, {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1200: {
          slidesPerView: 6.5,
          slidesPerGroup: 6.5,
        },
        992: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
        768: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        576: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        0: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      },
    });
  }
  ngOnInit() {
    this.filteredDoctors = this.doctors;
    this.buildPairs();
  }

  filter(id: number) {
    this.activeSpecialty = id;

    this.filteredDoctors =
      id === 0
        ? this.doctors
        : this.doctors.filter((d) => d.specialtyId === id);

    this.buildPairs();
  }

  private buildPairs() {
    this.doctorPairs = [];
    for (let i = 0; i < this.filteredDoctors.length; i += 2) {
      this.doctorPairs.push([
        this.filteredDoctors[i],
        this.filteredDoctors[i + 1],
      ]);
    }
  }
}
