import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsDormirPage } from './details-dormir.page';

describe('DetailsDormirPage', () => {
  let component: DetailsDormirPage;
  let fixture: ComponentFixture<DetailsDormirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDormirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsDormirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
