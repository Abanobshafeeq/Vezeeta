import { Component, ElementRef, HostListener } from '@angular/core';
import { HeaderDoctorsComponent } from '../header-doctors/header-doctors.component';
import { DropdownComponent, Page } from '../dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-header',
  standalone: true,
  imports: [HeaderDoctorsComponent, DropdownComponent,FormsModule],
  templateUrl: './booking-header.component.html',
  styleUrl: './booking-header.component.css',
})
export class BookingHeaderComponent {
  activeTab2: string = '';

  selectedSpecialty: string = '';
  activeTab: string = 'doctor';
  isLoading = false;

  setActive(tab: string) {
    this.activeTab = tab;
  }
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

  toggleDropdown(e: Event) {
    e.stopPropagation();
    this.activeTab2 =
      this.activeTab2 === 'open-specialty' ? '' : 'open-specialty';
  }

  onSpecialtySelected(value: string) {
    this.selectedSpecialty = value;
    this.activeTab2 = '';
  }
  onSearch(event: MouseEvent) {
    event.stopPropagation();
    if (this.isLoading) return;

    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      alert(
      `Specialty: ${this.selectedSpecialty || '-'}` 
    );
    }, 2000);
  }
  constructor(private el: ElementRef) {}
  
    @HostListener('document:click', ['$event'])
    onDocClick(event: MouseEvent) {
      const clickedInside = this.el.nativeElement.contains(event.target);
      if (!clickedInside) {
        this.activeTab2 = '';
      }
    }
}
