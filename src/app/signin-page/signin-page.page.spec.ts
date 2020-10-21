import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigninPagePage } from './signin-page.page';

describe('SigninPagePage', () => {
  let component: SigninPagePage;
  let fixture: ComponentFixture<SigninPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
