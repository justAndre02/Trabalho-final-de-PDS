import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAfterLoginTattoartistComponent } from './nav-after-login-tattoartist.component';

describe('NavAfterLoginTattoartistComponent', () => {
  let component: NavAfterLoginTattoartistComponent;
  let fixture: ComponentFixture<NavAfterLoginTattoartistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAfterLoginTattoartistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAfterLoginTattoartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
