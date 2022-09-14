import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tablepriceComponent } from './tableprice.component';

describe('tablepriceComponent', () => {
  let component: tablepriceComponent;
  let fixture: ComponentFixture<tablepriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tablepriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tablepriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
