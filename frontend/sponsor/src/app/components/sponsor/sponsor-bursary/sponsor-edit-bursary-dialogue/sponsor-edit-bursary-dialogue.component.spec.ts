import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorEditBursaryDialogueComponent } from './sponsor-edit-bursary-dialogue.component';

describe('SponsorEditBursaryDialogueComponent', () => {
  let component: SponsorEditBursaryDialogueComponent;
  let fixture: ComponentFixture<SponsorEditBursaryDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorEditBursaryDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorEditBursaryDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
