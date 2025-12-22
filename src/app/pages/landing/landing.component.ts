import { Component } from '@angular/core';
import { BookingHeaderComponent } from '../../components/booking-header/booking-header.component';
import { FeaturedDoctorsComponent } from '../../components/featured-doctors/featured-doctors.component';
import {
  HeaderDoctorsResponsiveComponent
} from "../../components/header-doctors-responsive/header-doctors-responsive.component";
import { RouterLink } from '@angular/router';
import { NorthComponent } from '../../components/north/north.component';
import {
  AskNowComponent,
  PromoCardData,
} from '../../components/ask-now/ask-now.component';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import {
  PromoSliderComponent,
  PromoSlideItem,
} from '../../components/promo-slider/promo-slider.component';
import { TOP_OFFERS } from '../../data/offers.data';
import { Book_Specialties } from '../../data/bookSpecialties.data';
import { VezeetaDownloadComponent } from '../../components/vezeeta-download/vezeeta-download.component';
// import { VezeetaDownloadComponent } from "../../components/vezeeta-download/vezeeta-download.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
  BookingHeaderComponent,
    FeaturedDoctorsComponent,
    HeaderDoctorsResponsiveComponent,
    RouterLink,
    NorthComponent,
    AskNowComponent,
    ServiceCardComponent,
    PromoSliderComponent,
    VezeetaDownloadComponent,
],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  scrollToContent() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }

  askCard: PromoCardData = {
    variant: 'light',
    iconSrc: '../../../assets/images/ask.svg',
    showIconMobileOnly: true,
    title: 'Have a Medical Question?',
    description:
      'Submit your medical question and receive an answer from a specialized doctor.',
    buttonText: 'Ask now',
    buttonLink: '',
  };

  pharmacyCard: PromoCardData = {
    variant: 'blue',
    iconSrc: '../../../assets/images/Pharmacy.png',
    showIconMobileOnly: true,
    title: 'Pharmacy',
    description: 'Get your medicine and all your pharmacy needs.',
    buttonText: 'Place order',
    buttonLink: '',
    bgImageSrc: '../../../assets/images/pharmcyBG.png',
  };

   topOffers: PromoSlideItem[] = TOP_OFFERS;
   bookSpecialties: PromoSlideItem[] = Book_Specialties;



}
