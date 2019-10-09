import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidaDatePickerComponent } from './valida-date-picker.component';

describe('ValidaDatePickerComponent', () => {
  let component: ValidaDatePickerComponent;
  let fixture: ComponentFixture<ValidaDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidaDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidaDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
