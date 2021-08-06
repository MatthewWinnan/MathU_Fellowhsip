import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBasicComponent } from './student-basic.component';

describe('StudentBasicComponent', () => {
  let component: StudentBasicComponent;
  let fixture: ComponentFixture<StudentBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
