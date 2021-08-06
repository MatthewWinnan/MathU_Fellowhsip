import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBursaryDetailedCardComponent } from './student-bursary-detailed-card.component';

describe('StudentBursaryDetailedCardComponent', () => {
  let component: StudentBursaryDetailedCardComponent;
  let fixture: ComponentFixture<StudentBursaryDetailedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentBursaryDetailedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBursaryDetailedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
