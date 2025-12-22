import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vezeeta-download',
  standalone :true,
  imports: [CommonModule ],
  templateUrl: './vezeeta-download.component.html',
  styleUrls: ['./vezeeta-download.component.scss'],
})
export class VezeetaDownloadComponent {
  features = [
  {
    icon: 'fas fa-notes-medical',
    title: 'All your healthcare needs',
    text: 'Search and book a clinic visit, home visit, or a teleconsultation. Order your medicine and book a service or operation.',
  },
  {
    icon: 'fas fa-user-check',
    title: 'Verified patient reviews',
    text: 'Doctor ratings are from patients who booked and visited the doctor through Vezeeta.',
  },
  {
    icon: 'fas fa-calendar-check',
    title: 'Your booking is confirmed',
    text: 'Your booking is automatically confirmed, as the doctor specifies his working hours and is notified of the booking details.',
  },
  {
    icon: 'fas fa-money-check-alt',
    title: 'Book for free, and pay in the clinic',
    text: 'The consultation fees stated on Vezeeta are the actual doctor\'s fees with no extra charges.',
  },
];

}
