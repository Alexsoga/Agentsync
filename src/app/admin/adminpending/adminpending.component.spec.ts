import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpendingComponent } from './adminpending.component';

describe('AdminpendingComponent', () => {
  let component: AdminpendingComponent;
  let fixture: ComponentFixture<AdminpendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
