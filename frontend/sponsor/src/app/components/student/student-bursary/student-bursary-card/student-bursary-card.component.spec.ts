import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBursaryCardComponent } from './student-bursary-card.component';

describe('StudentBursaryCardComponent', () => {
  let component: StudentBursaryCardComponent;
  let fixture: ComponentFixture<StudentBursaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentBursaryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBursaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
