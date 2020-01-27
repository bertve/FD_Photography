import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePinComponent } from './explore-pin.component';

describe('ExplorePinComponent', () => {
  let component: ExplorePinComponent;
  let fixture: ComponentFixture<ExplorePinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorePinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorePinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
