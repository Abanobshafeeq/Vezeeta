import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countrySource = new BehaviorSubject<string>('Egypt');
  private flagSource = new BehaviorSubject<string>('../../assets/images/e.png');

  selectedCountry$ = this.countrySource.asObservable();
  selectedFlag$ = this.flagSource.asObservable();

  changeCountry(country: string, flag: string) {
    this.countrySource.next(country);
    this.flagSource.next(flag);
  }
}
