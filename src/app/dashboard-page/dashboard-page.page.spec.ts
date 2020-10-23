import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardPagePage } from './dashboard-page.page';

describe('DashboardPagePage', () => {
  let component: DashboardPagePage;
  let fixture: ComponentFixture<DashboardPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
