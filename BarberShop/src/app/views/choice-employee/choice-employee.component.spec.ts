import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceEmployeeComponent } from './choice-employee.component';

describe('ChoiceEmployeeComponent', () => {
  let component: ChoiceEmployeeComponent;
  let fixture: ComponentFixture<ChoiceEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
