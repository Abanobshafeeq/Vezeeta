import { Component , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FEATURED_ENTITIES, Entity } from '../../data/entitiy.data';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-featured-entities',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './featured-entities.component.html',
  styleUrl: './featured-entities.component.css',
})
export class FeaturedEntitiesComponent {
    entities: Entity[] = FEATURED_ENTITIES;

}
