import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedEntitiesComponent } from './featured-entities.component';

describe('FeaturedEntitiesComponent', () => {
  let component: FeaturedEntitiesComponent;
  let fixture: ComponentFixture<FeaturedEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedEntitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
