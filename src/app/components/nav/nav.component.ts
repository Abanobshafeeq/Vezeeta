import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [SideMenuComponent , ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(private countryService: CountryService) {}

selectedCountry: string = '';
selectedFlag: string = '';

ngOnInit() {
  this.countryService.selectedCountry$.subscribe(c => this.selectedCountry = c);
  this.countryService.selectedFlag$.subscribe(f => this.selectedFlag = f);
}

changeCountry(country: string, flag: string) {
  this.countryService.changeCountry(country, flag);
}
   
}
