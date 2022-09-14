import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipCustomerComponent } from './vip-customer.component';

describe('VipCustomerComponent', () => {
  let component: VipCustomerComponent;
  let fixture: ComponentFixture<VipCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VipCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VipCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
