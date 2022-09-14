import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFieldComponent } from './signup-field.component';

describe('SignupFieldComponent', () => {
  let component: SignupFieldComponent;
  let fixture: ComponentFixture<SignupFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
