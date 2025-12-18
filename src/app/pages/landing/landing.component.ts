import { Component } from '@angular/core';
import { BookingHeaderComponent } from "../../components/booking-header/booking-header.component";
import { FeaturedDoctorsComponent } from "../../components/featured-doctors/featured-doctors.component";
import {
  HeaderDoctorsResponsiveComponent
} from "../../components/header-doctors-responsive/header-doctors-responsive.component";
import { RouterLink } from "@angular/router";
import { NorthComponent } from "../../components/north/north.component";
import { AskNowComponent } from "../../components/ask-now/ask-now.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [BookingHeaderComponent, FeaturedDoctorsComponent, HeaderDoctorsResponsiveComponent, RouterLink, NorthComponent, AskNowComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  scrollToContent() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}

}
