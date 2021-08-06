import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorBursaryComponent } from './sponsor-bursary.component';

describe('SponsorBursaryComponent', () => {
  let component: SponsorBursaryComponent;
  let fixture: ComponentFixture<SponsorBursaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorBursaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorBursaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
