import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTattooartistComponent } from './edit-tattooartist.component';

describe('EditTattooartistComponent', () => {
  let component: EditTattooartistComponent;
  let fixture: ComponentFixture<EditTattooartistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTattooartistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTattooartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
