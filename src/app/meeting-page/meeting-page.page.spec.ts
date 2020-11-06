import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeetingPagePage } from './meeting-page.page';

describe('MeetingPagePage', () => {
  let component: MeetingPagePage;
  let fixture: ComponentFixture<MeetingPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeetingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
