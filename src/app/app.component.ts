import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderDoctorsComponent } from './components/header-doctors/header-doctors.component';
import { BookingHeaderComponent } from './components/booking-header/booking-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NavComponent ,FooterComponent , HeaderDoctorsComponent ,BookingHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Vezeeta';
}
