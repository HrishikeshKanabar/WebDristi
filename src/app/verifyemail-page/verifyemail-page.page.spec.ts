import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyemailPagePage } from './verifyemail-page.page';

describe('VerifyemailPagePage', () => {
  let component: VerifyemailPagePage;
  let fixture: ComponentFixture<VerifyemailPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyemailPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyemailPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
