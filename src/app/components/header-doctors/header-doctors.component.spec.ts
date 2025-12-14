import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDoctorsComponent } from './header-doctors.component';

describe('HeaderDoctorsComponent', () => {
  let component: HeaderDoctorsComponent;
  let fixture: ComponentFixture<HeaderDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDoctorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
