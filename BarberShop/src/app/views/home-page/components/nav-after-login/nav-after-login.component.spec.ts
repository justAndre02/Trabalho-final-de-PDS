import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAfterLoginComponent } from './nav-after-login.component';

describe('NavAfterLoginComponent', () => {
  let component: NavAfterLoginComponent;
  let fixture: ComponentFixture<NavAfterLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAfterLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAfterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
