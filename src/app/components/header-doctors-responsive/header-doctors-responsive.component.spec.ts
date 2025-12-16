import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDoctorsResponsiveComponent } from './header-doctors-responsive.component';

describe('HeaderDoctorsResponsiveComponent', () => {
  let component: HeaderDoctorsResponsiveComponent;
  let fixture: ComponentFixture<HeaderDoctorsResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDoctorsResponsiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderDoctorsResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
