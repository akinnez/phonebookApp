import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcontactsComponent } from './allcontacts.component';

describe('AllcontactsComponent', () => {
  let component: AllcontactsComponent;
  let fixture: ComponentFixture<AllcontactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcontactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
