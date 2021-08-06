import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoScreenComponent } from './logo-screen.component';

describe('LogoScreenComponent', () => {
  let component: LogoScreenComponent;
  let fixture: ComponentFixture<LogoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
