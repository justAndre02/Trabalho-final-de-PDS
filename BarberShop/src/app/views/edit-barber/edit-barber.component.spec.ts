import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBarberComponent } from './edit-barber.component';

describe('EditBarberComponent', () => {
  let component: EditBarberComponent;
  let fixture: ComponentFixture<EditBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
