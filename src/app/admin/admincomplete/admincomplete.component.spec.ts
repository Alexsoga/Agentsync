import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincompleteComponent } from './admincomplete.component';

describe('AdmincompleteComponent', () => {
  let component: AdmincompleteComponent;
  let fixture: ComponentFixture<AdmincompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
