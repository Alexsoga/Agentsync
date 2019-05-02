import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminscheduledComponent } from './adminscheduled.component';

describe('AdminscheduledComponent', () => {
  let component: AdminscheduledComponent;
  let fixture: ComponentFixture<AdminscheduledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminscheduledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminscheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
