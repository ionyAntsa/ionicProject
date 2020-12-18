import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MangerPage } from './manger.page';

describe('MangerPage', () => {
  let component: MangerPage;
  let fixture: ComponentFixture<MangerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MangerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
