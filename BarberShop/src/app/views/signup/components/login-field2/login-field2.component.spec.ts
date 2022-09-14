import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginField2Component } from './login-field2.component';

describe('LoginField2Component', () => {
  let component: LoginField2Component;
  let fixture: ComponentFixture<LoginField2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginField2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginField2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
