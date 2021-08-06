import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBursaryComponent } from './student-bursary.component';

describe('StudentBursaryComponent', () => {
  let component: StudentBursaryComponent;
  let fixture: ComponentFixture<StudentBursaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentBursaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBursaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
