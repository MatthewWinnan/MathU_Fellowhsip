import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDetailedCardComponent } from './application-detailed-card.component';

describe('ApplicationDetailedCardComponent', () => {
  let component: ApplicationDetailedCardComponent;
  let fixture: ComponentFixture<ApplicationDetailedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationDetailedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDetailedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
