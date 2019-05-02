import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmininvoiceComponent } from './admininvoice.component';

describe('AdmininvoiceComponent', () => {
  let component: AdmininvoiceComponent;
  let fixture: ComponentFixture<AdmininvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmininvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmininvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
