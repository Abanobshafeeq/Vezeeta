import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskNowComponent } from './ask-now.component';

describe('AskNowComponent', () => {
  let component: AskNowComponent;
  let fixture: ComponentFixture<AskNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskNowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AskNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
