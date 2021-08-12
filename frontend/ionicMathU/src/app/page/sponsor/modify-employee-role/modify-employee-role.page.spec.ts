import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifyEmployeeRolePage } from './modify-employee-role.page';

describe('ModifyEmployeeRolePage', () => {
  let component: ModifyEmployeeRolePage;
  let fixture: ComponentFixture<ModifyEmployeeRolePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyEmployeeRolePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifyEmployeeRolePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
