import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentlandComponent } from './contentland.component';

describe('ContentlandComponent', () => {
  let component: ContentlandComponent;
  let fixture: ComponentFixture<ContentlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentlandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
