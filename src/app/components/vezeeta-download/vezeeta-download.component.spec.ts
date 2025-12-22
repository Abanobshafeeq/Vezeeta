import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VezeetaDownloadComponent } from './vezeeta-download.component';

describe('VezeetaDownloadComponent', () => {
  let component: VezeetaDownloadComponent;
  let fixture: ComponentFixture<VezeetaDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VezeetaDownloadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VezeetaDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
