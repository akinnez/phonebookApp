import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPhoneComponent } from './landing-phone.component';

describe('LandingPhoneComponent', () => {
  let component: LandingPhoneComponent;
  let fixture: ComponentFixture<LandingPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
