import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanSpinnerComponent } from './scan-spinner.component';

describe('ScanSpinnerComponent', () => {
  let component: ScanSpinnerComponent;
  let fixture: ComponentFixture<ScanSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
