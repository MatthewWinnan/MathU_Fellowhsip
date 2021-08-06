import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEducationComponent } from './student-education.component';

describe('StudentEducationComponent', () => {
  let component: StudentEducationComponent;
  let fixture: ComponentFixture<StudentEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
