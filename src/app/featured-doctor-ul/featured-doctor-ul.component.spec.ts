import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedDoctorUlComponent } from './featured-doctor-ul.component';

describe('FeaturedDoctorUlComponent', () => {
  let component: FeaturedDoctorUlComponent;
  let fixture: ComponentFixture<FeaturedDoctorUlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedDoctorUlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedDoctorUlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
