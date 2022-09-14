import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAfterLoginVipComponent } from './nav-after-login-vip.component';

describe('NavAfterLoginVipComponent', () => {
  let component: NavAfterLoginVipComponent;
  let fixture: ComponentFixture<NavAfterLoginVipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAfterLoginVipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAfterLoginVipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
