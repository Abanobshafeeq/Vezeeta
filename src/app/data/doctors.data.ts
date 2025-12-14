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
    image: '../../assets/images/doctors/kariem.png'},
  {
    id: 2,
    name: 'Fayroz Ahmed',
    specialtyId: 3,
    specialty: 'General Surgery',
    rating: 4.7,
    city: 'Dokki',
    area: 'Mohandeseen',
    image: '../../assets/images/doctors/fayroz.png'
  },{
    id: 3,
    name: 'Mena Ahmed',
    specialtyId: 2,
    specialty: 'Gastroenterology and Endoscopy',
    rating: 4.7,
    city: 'Dokki',
    area: 'Mohandeseen',
    image: '../../assets/images/doctors/fayroz.png'
  },
  {
    id: 4,
    name: 'Mohamed El Dewani',
    specialtyId: 5,
    specialty: 'Psychiatry',
    rating: 4.5,
    city: 'Nasr City',
    area: 'El Sayed',
    image: '../../assets/images/doctors/kariem.png'},
];
