import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcmMapComponent } from './ucm-map.component';

describe('UcmMapComponent', () => {
  let component: UcmMapComponent;
  let fixture: ComponentFixture<UcmMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UcmMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcmMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
