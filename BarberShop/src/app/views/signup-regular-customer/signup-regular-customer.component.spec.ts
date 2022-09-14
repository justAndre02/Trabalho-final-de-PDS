import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRegularCustomerComponent } from './signup-regular-customer.component';

describe('SignupRegularCustomerComponent', () => {
  let component: SignupRegularCustomerComponent;
  let fixture: ComponentFixture<SignupRegularCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupRegularCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupRegularCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
