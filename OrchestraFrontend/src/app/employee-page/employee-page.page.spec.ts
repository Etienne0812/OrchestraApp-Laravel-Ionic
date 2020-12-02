import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmployeePagePage } from './employee-page.page';

describe('EmployeePagePage', () => {
  let component: EmployeePagePage;
  let fixture: ComponentFixture<EmployeePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
