import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent implements OnInit {
    menuOpen = false;

  selectedCountry = '';
  selectedFlag = '';

  dropdownOpen = false; 

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.selectedCountry$.subscribe(c => this.selectedCountry = c);
    this.countryService.selectedFlag$.subscribe(f => this.selectedFlag = f);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectCountry(country: string, flag: string) {
    this.countryService.changeCountry(country, flag);
    this.dropdownOpen = false; 
  }
  changeCountry(country: string, flag: string) {
  this.countryService.changeCountry(country, flag);
}
}
