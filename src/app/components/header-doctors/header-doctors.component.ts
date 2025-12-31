import { Component, ElementRef, HostListener} from '@angular/core';
import { DropdownComponent, Page } from '../dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-doctors',
  standalone: true,
  imports: [DropdownComponent ,FormsModule],
  templateUrl: './header-doctors.component.html',
  styleUrl: './header-doctors.component.css',
})
export class HeaderDoctorsComponent {
  activeTab: string = '';

  selectedSpecialty: string = '';
  selectedCity: string = '';
  selectedArea = 'Choose area';
  searchName: string = '';
  isLoading = false;
 


  pages: Page[] = [
    {
      mostPopular: [
        'Dermatology (Skin)',
        'Dentistry (Teeth)',
        'Psychiatry (Mental, Emotional or Behavioral Disorders)',
        'Pediatrics and New Born (Child)',
        'Neurology (Brain & Nerves)',
        'Orthopedics (Bones)',
        'Gynaecology and Infertility',
        'Ear, Nose and Throat',
        'Cardiology and Vascular Disease (Heart)',
      ],
      otherSpecialties: [
        'Allergy and Immunology (Sensitivity and Immunity)',
        'Andrology and Male Infertility',
        'Audiology',
        'Cardiology and Thoracic Surgery (Heart & Chest)',
        'Chest and Respiratory',
        'Diabetes and Endocrinology',
        'Diagnostic Radiology (Scan Centers)',
        'Dietitian and Nutrition',
        'Family Medicine',
      ],
    },
    {
      mostPopular: [
        'Gastroenterology and Endoscopy',
        'General Practice',
        'General Surgery',
        'Geriatrics (Old People Health)',
        'Hematology',
        'Hepatology (Liver Doctor)',
        'Internal Medicine',
        'Interventional Radiology (Interventional Radiology)',
        'IVF and Infertility',
      ],
      otherSpecialties: [
        'Laboratories',
        'Nephrology',
        'Neurosurgery (Brain & Nerves Surgery)',
        'Obesity and Laparoscopic Surgery',
        'Oncology (Tumor)',
        'Oncology Surgery (Tumor Surgery)',
        'Ophthalmology (Eyes)',
        'Osteopathy (Osteopathic Medicine)',
        'Pain Management',
      ],
    },
    {
      mostPopular: [
        'Pediatric Surgery',
        'Phoniatrics (Speech)',
        'Physiotherapy and Sport Injuries',
        'Plastic Surgery',
        'Rheumatology',
      ],
      otherSpecialties: [
        'Spinal Surgery',
        'Urology (Urinary System)',
        'Vascular Surgery (Arteries and Vein Surgery)',
        'veterinary (veterinary)',
      ],
    },
  ];

  cityPages: Page[] = [
    {
      mostPopular: [
        'All Cities',
        'Cairo',
        'Giza',
        'Alexandria',
        'North Coast',
        'Qalyubia',
        'Gharbia',
        'Menoufia',
        'Fayoum',
      ],
      otherSpecialties: [
        'El-Dakahlia',
        'El-Sharqia',
        'El-Beheira',
        'Damietta',
        'Matrouh',
        'Assiut',
        'El-Ismailia',
        'Hurghada',
        'Sharm El Sheikh',
      ],
    },
    {
      mostPopular: ['Portsaid', 'Suez', 'Sohag', 'El-Minia', 'Kafr El sheikh'],
      otherSpecialties: ['Luxor', 'Qena', 'Aswan', 'Beni Suef'],
    },
  ];

  toggleDropdown(e: Event) {
    e.stopPropagation();
    this.activeTab =
      this.activeTab === 'open-specialty' ? '' : 'open-specialty';
  }

  toggleDropdown2(e: Event) {
    e.stopPropagation();
    this.activeTab = this.activeTab === 'open-city' ? '' : 'open-city';
  }
  toggleDropdown3(e: Event) {
    e.stopPropagation();
    this.activeTab = this.activeTab === 'open-area' ? '' : 'open-area';
  }

  onSpecialtySelected(value: string) {
    this.selectedSpecialty = value;
    this.activeTab = '';
  }

  onCitySelected(value: string) {
    this.selectedCity = value;
    this.activeTab = '';
  }
  selectArea(value: string, event: MouseEvent) {
    event.stopPropagation();
    this.selectedArea = value;
    this.activeTab = '';
  }

  onSearch() {
    if (this.isLoading) return;

    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      alert(
      `Specialty: ${this.selectedSpecialty || '-'}\n` +
      `City: ${this.selectedCity || '-'}\n` +
      `Area: ${this.selectedArea || '-'}\n` + 
      `Name: ${this.searchName || '-'}`
    );
    }, 2000);
  }
  
  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocClick(event: MouseEvent) {
    const clickedInside = this.el.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.activeTab = '';
    }
  }
}
