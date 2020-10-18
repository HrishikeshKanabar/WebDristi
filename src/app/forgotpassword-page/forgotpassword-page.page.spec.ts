import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForgotpasswordPagePage } from './forgotpassword-page.page';

describe('ForgotpasswordPagePage', () => {
  let component: ForgotpasswordPagePage;
  let fixture: ComponentFixture<ForgotpasswordPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotpasswordPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotpasswordPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
