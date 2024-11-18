import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSoundComponent } from './add-sound.component';

describe('AddSoundComponent', () => {
  let component: AddSoundComponent;
  let fixture: ComponentFixture<AddSoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
