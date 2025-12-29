import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

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
export class FeaturedDoctorsComponent implements OnInit {
  specialties = SPECIALTIES;
  doctors: Doctor[] = DOCTORS;
  filteredDoctors: Doctor[] = [];
  activeSpecialty = 0;

  doctorPairs: Doctor[][] = [];

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

  swiperBreakpoints = {
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
  };
}
