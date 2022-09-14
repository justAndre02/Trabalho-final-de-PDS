import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceRegisterComponent } from './choice-register.component';

describe('ChoiceRegisterComponent', () => {
  let component: ChoiceRegisterComponent;
  let fixture: ComponentFixture<ChoiceRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
