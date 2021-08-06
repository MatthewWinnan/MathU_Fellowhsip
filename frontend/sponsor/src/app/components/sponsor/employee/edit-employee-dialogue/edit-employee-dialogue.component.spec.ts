import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeDialogueComponent } from './edit-employee-dialogue.component';

describe('EditEmployeeDialogueComponent', () => {
  let component: EditEmployeeDialogueComponent;
  let fixture: ComponentFixture<EditEmployeeDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeeDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
