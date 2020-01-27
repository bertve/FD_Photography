import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinDeleteComponent } from './pin-delete.component';

describe('PinDeleteComponent', () => {
  let component: PinDeleteComponent;
  let fixture: ComponentFixture<PinDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
