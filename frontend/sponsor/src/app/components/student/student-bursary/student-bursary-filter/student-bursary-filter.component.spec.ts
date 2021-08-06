import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBursaryFilterComponent } from './student-bursary-filter.component';

describe('StudentBursaryFilterComponent', () => {
  let component: StudentBursaryFilterComponent;
  let fixture: ComponentFixture<StudentBursaryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentBursaryFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBursaryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
