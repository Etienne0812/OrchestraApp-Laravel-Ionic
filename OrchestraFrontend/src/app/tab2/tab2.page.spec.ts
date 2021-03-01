import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Router, RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicStorageModule} from '@ionic/storage'

import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab2Page],
      imports: [IonicModule.forRoot(), 
      ExploreContainerComponentModule,
      HttpClientTestingModule,
      IonicStorageModule.forRoot(),
      RouterModule.forRoot(
        [
          {
            path: '',
            component: Tab2Page
          }
        ]
      ),
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div', () => {
    const divElement: HTMLElement = fixture.nativeElement;
    const div = divElement.querySelector('div');
    expect(div.className).toMatch('container');
    })

});
