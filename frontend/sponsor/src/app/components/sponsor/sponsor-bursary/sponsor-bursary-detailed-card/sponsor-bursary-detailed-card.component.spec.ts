import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorBursaryDetailedCardComponent } from './sponsor-bursary-detailed-card.component';

describe('SponsorBursaryDetailedCardComponent', () => {
  let component: SponsorBursaryDetailedCardComponent;
  let fixture: ComponentFixture<SponsorBursaryDetailedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorBursaryDetailedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorBursaryDetailedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
