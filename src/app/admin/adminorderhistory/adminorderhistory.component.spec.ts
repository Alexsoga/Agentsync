import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminorderhistoryComponent } from './adminorderhistory.component';

describe('AdminorderhistoryComponent', () => {
  let component: AdminorderhistoryComponent;
  let fixture: ComponentFixture<AdminorderhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminorderhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminorderhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
