import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncViewComponent } from './func-view.component';

describe('FuncViewComponent', () => {
  let component: FuncViewComponent;
  let fixture: ComponentFixture<FuncViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
