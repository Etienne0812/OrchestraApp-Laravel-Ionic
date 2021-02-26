import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateRequestPage } from './create-request.page';

describe('CreateRequestPage', () => {
  let component: CreateRequestPage;
  let fixture: ComponentFixture<CreateRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div', () => {
  fixture = TestBed.createComponent(CreateRequestPage);
  const element: HTMLElement = fixture.nativeElement;
  const div = element.querySelector('div');
  expect(div).toBeDefined();
  })
  
});

// describe("Search", function() {
 
//   //css should be included in Karma config
 
//   var divElem = document.getElementById('sample');
//   divElem.id = 'sample-div';
//   document.body.appendChild(divElem);

//    it("sample div should be shown", function() {
   
//     //the hidden class should be in the css
//     divElem.className += " container";
    
//     var elemStyle = window.getComputedStyle(divElem);
    
//     expect(elemStyle.getPropertyValue('display')).toEqual('none');
    
//    });
 
//  });
