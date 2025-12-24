import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DOCTORS, SPECIALTIES } from '../../data/doctors.data';
import { Doctor } from '../../models/doctor';

@Component({
  selector: 'app-featured-doctors',
  standalone: true,
  imports: [
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './featured-doctors.component.html',
  styleUrls: ['./featured-doctors.component.scss']
})
export class FeaturedDoctorsComponent implements OnInit {

  specialties = SPECIALTIES;
  doctors: Doctor[] = DOCTORS;
  filteredDoctors: Doctor[] = [];
  activeSpecialty = 0;

  row1Doctors: Doctor[] = [];
  row2Doctors: Doctor[] = [];

  ngOnInit() {
    this.filteredDoctors = this.doctors;
    this.splitRows();          
  }

  swiperBreakpoints = {
    1200: {
      slidesPerView: 6.5 ,      slidesPerGroup: 6.5
    },
    992: {
      slidesPerView: 5,
      slidesPerGroup: 5
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4
    },
    576: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    0: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    }
  };

  private splitRows() {
    this.row1Doctors = this.filteredDoctors.filter(d => d.id % 2 === 1);
    this.row2Doctors = this.filteredDoctors.filter(d => d.id % 2 === 0);
  }

  filter(id: number) {
    this.activeSpecialty = id;
    this.filteredDoctors =
      id === 0
        ? this.doctors
        : this.doctors.filter(d => d.specialtyId === id);

    this.splitRows();        
  }
}
