import { Component } from '@angular/core';
import { HeaderDoctorsComponent } from '../header-doctors/header-doctors.component';

@Component({
  selector: 'app-booking-header',
  standalone: true,
  imports: [HeaderDoctorsComponent],
  templateUrl: './booking-header.component.html',
  styleUrl: './booking-header.component.css'
})
export class BookingHeaderComponent {
  activeTab: string = 'doctor';

  setActive(tab: string) {
    this.activeTab = tab;
  }
}
