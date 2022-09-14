import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncTatooArtistViewComponent } from './func-tatoo-artist-view.component';

describe('FuncTatooArtistViewComponent', () => {
  let component: FuncTatooArtistViewComponent;
  let fixture: ComponentFixture<FuncTatooArtistViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncTatooArtistViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncTatooArtistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
