import { Component, OnInit ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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

  ngOnInit() {
    this.filteredDoctors = this.doctors;
  }

  filter(id: number) {
    this.activeSpecialty = id;
    this.filteredDoctors =
      id === 0
        ? this.doctors
        : this.doctors.filter(d => d.specialtyId === id);
  }
}
