export interface Entity {
  id: number;
  name: string;
  image: string;
  logo?: string;
  specialtiesCount: number;
  location: string;
}

export const FEATURED_ENTITIES: Entity[] = [
  {
    id: 1,
    name: 'Z Care For Psychiatry',
    image: 'assets/images/entities/z-care-cover.jpg',
    logo: 'assets/images/entities/z-care-logo.png',
    specialtiesCount: 4,
    location: 'Hadayek El-Ahram'
  },
  {
    id: 2,
    name: 'Aura Dental Care',
    image: 'assets/images/entities/aura-cover.jpg',
    logo: 'assets/images/entities/aura-logo.png',
    specialtiesCount: 1,
    location: 'Suez City, New Cairo'
  },
  {
    id: 3,
    name: 'BARAKA MEDICAL',
    image: 'assets/images/entities/baraka-cover.jpg',
    logo: 'assets/images/entities/baraka-logo.png',
    specialtiesCount: 15,
    location: 'El-Shorouk, 10th of Ramadan'
  },
  {
    id: 4,
    name: 'Shiny White Centers',
    image: 'assets/images/entities/shiny-cover.jpg',
    logo: 'assets/images/entities/shiny-logo.png',
    specialtiesCount: 1,
    location: 'North Coast, Madinaty'
  }
];
