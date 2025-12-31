import { Injectable } from '@angular/core'; // to make the service injectable 3lshan nst5dmha fii ay components
import { BehaviorSubject } from 'rxjs'; // store data and emit new values to subscribers

@Injectable({
  providedIn: 'root' // service available throughout the app
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
