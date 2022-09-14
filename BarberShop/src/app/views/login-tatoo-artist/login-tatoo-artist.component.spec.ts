import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTatooArtistComponent } from './login-tatoo-artist.component';

describe('LoginTatooArtistComponent', () => {
  let component: LoginTatooArtistComponent;
  let fixture: ComponentFixture<LoginTatooArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTatooArtistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTatooArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
