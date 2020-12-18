import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DormirPage } from './dormir.page';

describe('DormirPage', () => {
  let component: DormirPage;
  let fixture: ComponentFixture<DormirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DormirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
