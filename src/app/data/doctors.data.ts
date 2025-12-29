import { Doctor } from '../models/doctor';

export const SPECIALTIES = [
  { id: 0, name: 'All Specialties' },
  { id: 1, name: 'Dentistry' },
  { id: 2, name: 'Gastroenterology and Endoscopy' },
  { id: 3, name: 'General Surgery' },
  { id: 4, name: 'Orthopedics' },
  { id: 5, name: 'Psychiatry' }
];

export const DOCTORS: Doctor[] = [
  {
    id: 1,
    name: 'Kareem El Dewani',
    specialtyId: 1,
    specialty: 'Dentistry',
    rating: 4.5,
    city: 'Nasr City',
    area: 'El Sayed',
    image: 'assets/images/doctors/kariem.png'
  },
  {
    id: 2,
    name: 'Fayroz Ahmed',
    specialtyId: 3,
    specialty: 'General Surgery',
    rating: 4.7,
    city: 'Dokki',
    area: 'Mohandeseen',
    image: 'assets/images/doctors/fayroz.png'
  },
  {
    id: 3,
    name: 'Mena Ahmed',
    specialtyId: 2,
    specialty: 'Gastroenterology and Endoscopy',
    rating: 4.7,
    city: 'Dokki',
    area: 'Mohandeseen',
    image: 'assets/images/doctors/center-wafaa-mohamed-psychiatry_20251211225655635.jpg'
  },
  {
    id: 4,
    name: 'Mohamed El Dewani',
    specialtyId: 5,
    specialty: 'Psychiatry',
    rating: 4.5,
    city: 'Nasr City',
    area: 'El Sayed',
    image: 'assets/images/doctors/kariem.png'
  },

  // extra mock doctors to fill first row
  {
    id: 5,
    name: 'Amr Elshamy',
    specialtyId: 1,
    specialty: 'Dentistry',
    rating: 4.7,
    city: 'Heliopolis',
    area: 'El Nozha',
    image: 'assets/images/doctors/doctor-amr-elshamy-dentistry_20241027011201994.jpg'
  },
  {
    id: 6,
    name: 'Ahmed Taiee',
    specialtyId: 2,
    specialty: 'Gastroenterology and Endoscopy',
    rating: 4.7,
    city: 'Dokki',
    area: 'Mohandeseen',
    image: 'assets/images/doctors/doctor-ahmed-taiee-gastroenterology-and-endoscopy-1_20241116004740356.jpg'
  },
  {
    id: 7,
    name: 'Ahmed Ibrahim',
    specialtyId: 3,
    specialty: 'General Surgery',
    rating: 4.5,
    city: 'Dokki',
    area: 'Mohandeseen',
    image: 'assets/images/doctors/doctor-ahmed-ibrahim-mohamed-general-surgery_20190116144256675.jpg'
  },
  {
    id: 8,
    name: 'Mohamed Refai',
    specialtyId: 3,
    specialty: 'General Surgery',
    rating: 4.8,
    city: 'Heliopolis',
    area: 'El Khalifa',
    image: 'assets/images/doctors/doctor-mohamed-el-refaai-general-surgery_20250803135443316.jpg'
  },
  {
    id: 9,
    name: 'Tamer Yehia HCC',
    specialtyId: 4,
    specialty: 'Orthopedics',
    rating: 4.3,
    city: 'Dokki',
    area: 'Mohandeseen',
    image: 'assets/images/doctors/doctor-mohamed-hatem-vascular-surgery_20241011142436040.jpg'
  },
  {
    id: 10,
    name: 'Ayman Abdallah',
    specialtyId: 3,
    specialty: 'General Surgery',
    rating: 4.4,
    city: 'Dokki',
    area: 'Mohandeseen',
    image: 'assets/images/doctors/doctor-ahmed-taiee-gastroenterology-and-endoscopy-1_20241116004740356.jpg'
  },

  // second row examples
  {
    id: 11,
    name: 'Mohamed Elkhatib',
    specialtyId: 1,
    specialty: 'Dentistry',
    rating: 4.3,
    city: 'Hadayeq El Ahram',
    area: 'Giza',
    image: 'assets/images/doctors/doctor-mohamed-el-khateb-dentistry_20250521001943810.jpg'
  },
  {
    id: 12,
    name: 'Ahmed Salem',
    specialtyId: 1,
    specialty: 'Dentistry',
    rating: 4.6,
    city: 'New Cairo',
    area: 'Medical Center',
    image: 'assets/images/doctors/doctor-ahmed-salem-dentistry-3_20251212021634462.jpg'
  },
  {
    id: 13,
    name: 'Ahmed Abd El Halim',
    specialtyId: 2,
    specialty: 'Gastroenterology and Endoscopy',
    rating: 4.7,
    city: 'El Sheikh Zayed',
    area: 'District 2',
    image: 'assets/images/doctors/doctor-ahmed-abdelhalim-gastroenterology-and-endoscopy_20241013172838521.jpg'
  },
  {
    id: 14,
    name: 'Mohamed Labib',
    specialtyId: 4,
    specialty: 'Orthopedics',
    rating: 4.5,
    city: 'New Cairo',
    area: 'El Rehab',
    image: 'assets/images/doctors/doctor-mohamed-labib-orthopedics-1_20250704232642067.jpg'
  },
  {
    id: 15,
    name: 'Wafaa Mohamed',
    specialtyId: 5,
    specialty: 'Psychiatry',
    rating: 4.6,
    city: 'El Giza',
    area: 'Chamber',
    image: 'assets/images/doctors/center-wafaa-mohamed-psychiatry_20251211225655635.jpg'
  },
  {
    id: 16,
    name: 'Bahaa Mostafa Dewedar',
    specialtyId: 3,
    specialty: 'General Surgery',
    rating: 4.5,
    city: 'El Sheikh Zayed',
    area: 'District 4',
    image: 'assets/images/doctors/doctor-hcc-hamer-yehia-orthopedic-and-rheumatology_20200429112418383.jpg'
  }
];
