import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { ScrollTrackerDirective } from '../../shared/scroll-tracker.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, RouterLink, ScrollTrackerDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
