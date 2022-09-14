import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooartistComponent } from './tattooartist.component';

describe('TattooartistComponent', () => {
  let component: TattooartistComponent;
  let fixture: ComponentFixture<TattooartistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TattooartistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TattooartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
