import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOCTORS, SPECIALTIES } from '../data/doctors.data';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'app-featured-doctor-ul',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-doctor-ul.component.html',
  styleUrls: ['./featured-doctor-ul.component.css'],
})
export class FeaturedDoctorUlComponent implements OnInit {
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
      id === 0 ? this.doctors : this.doctors.filter((d) => d.specialtyId === id);

    this.buildPairs();
  }

  private buildPairs() {
    this.doctorPairs = [];
    for (let i = 0; i < this.filteredDoctors.length; i += 2) {
      this.doctorPairs.push([this.filteredDoctors[i], this.filteredDoctors[i + 1]]);
    }
  }

  trackByIndex = (index: number) => index;
}
