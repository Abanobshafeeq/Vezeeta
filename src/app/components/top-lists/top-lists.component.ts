import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-lists',
  standalone:true ,
  imports : [CommonModule],
  templateUrl: './top-lists.component.html',
  styleUrls: ['./top-lists.component.css'],
})
export class TopListsComponent {
  specialties = [
    'Dermatologist',
    'Dentist',
    'Psychiatrist',
    'Pediatrician',
    'Neurologist',
    'Orthopedist',
    'Gynecologist',
    'ENT Doctor',
    'Cardiologist',
    'View More ...',
  ];

  cities = [
    'Cairo',
    'Giza',
    'Alexandria',
    'North Coast',
    'Qalyubia',
    'Gharbia',
    'Menoufia',
    'Fayoum',
    'El-Dakahlia',
    'View More ...',
  ];
}
