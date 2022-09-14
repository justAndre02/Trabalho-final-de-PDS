import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBarberComponent } from './login-barber.component';

describe('LoginBarberComponent', () => {
  let component: LoginBarberComponent;
  let fixture: ComponentFixture<LoginBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
