import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorBursaryCardComponent } from './sponsor-bursary-card.component';

describe('SponsorBursaryCardComponent', () => {
  let component: SponsorBursaryCardComponent;
  let fixture: ComponentFixture<SponsorBursaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorBursaryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorBursaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
