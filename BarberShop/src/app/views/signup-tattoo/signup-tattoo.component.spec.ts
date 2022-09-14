import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTattooComponent } from './signup-tattoo.component';

describe('SignupTattooComponent', () => {
  let component: SignupTattooComponent;
  let fixture: ComponentFixture<SignupTattooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupTattooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupTattooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
