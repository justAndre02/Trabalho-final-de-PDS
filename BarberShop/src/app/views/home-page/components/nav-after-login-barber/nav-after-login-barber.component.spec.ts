import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAfterLoginBarberComponent } from './nav-after-login-barber.component';

describe('NavAfterLoginBarberComponent', () => {
  let component: NavAfterLoginBarberComponent;
  let fixture: ComponentFixture<NavAfterLoginBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAfterLoginBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAfterLoginBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
