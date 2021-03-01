import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmployeeRequestsPage } from './employee-requests.page';

describe('EmployeeRequestsPage', () => {
  let component: EmployeeRequestsPage;
  let fixture: ComponentFixture<EmployeeRequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRequestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe("Search", function() {
 
  //   //css should be included in Karma config
   
  //   var divElem = document.createElement('div');
  //   divElem.id = 'sample-div';
  //   document.body.appendChild(divElem);
  
  //    it("sample div should be shown", function() {
     
  //     //the hidden class should be in the css
  //     divElem.className += " container";
      
  //     var elemStyle = window.getComputedStyle(divElem);
      
  //     expect(elemStyle.getPropertyValue('display')).toEqual('');
      
  //    });
   
   
  //  });
});
