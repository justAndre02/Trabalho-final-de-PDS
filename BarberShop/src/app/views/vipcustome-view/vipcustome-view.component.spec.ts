import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipcustomeViewComponent } from './vipcustome-view.component';

describe('VipcustomeViewComponent', () => {
  let component: VipcustomeViewComponent;
  let fixture: ComponentFixture<VipcustomeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VipcustomeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VipcustomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
