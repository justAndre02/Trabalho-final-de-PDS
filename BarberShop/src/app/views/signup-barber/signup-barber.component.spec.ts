import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupBarberComponent } from './signup-barber.component';

describe('SignupBarberComponent', () => {
  let component: SignupBarberComponent;
  let fixture: ComponentFixture<SignupBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
