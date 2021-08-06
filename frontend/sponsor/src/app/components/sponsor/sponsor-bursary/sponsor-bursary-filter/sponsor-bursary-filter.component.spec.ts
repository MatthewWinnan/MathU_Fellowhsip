import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorBursaryFilterComponent } from './sponsor-bursary-filter.component';

describe('SponsorBursaryFilterComponent', () => {
  let component: SponsorBursaryFilterComponent;
  let fixture: ComponentFixture<SponsorBursaryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorBursaryFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorBursaryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
