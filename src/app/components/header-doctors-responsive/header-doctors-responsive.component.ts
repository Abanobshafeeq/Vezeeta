import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-doctors-responsive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-doctors-responsive.component.html',
  styleUrl: './header-doctors-responsive.component.css'
})
export class HeaderDoctorsResponsiveComponent {
  activeTab: 'clinic' | 'medicine' | 'call' = 'clinic';
  activeTabBtn: 'clinic' | 'call' = 'clinic';

  setTab(tab: 'clinic' | 'medicine' | 'call') {
    this.activeTab = tab;
}
}
