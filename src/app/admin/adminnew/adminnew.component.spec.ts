import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnewComponent } from './adminnew.component';

describe('AdminnewComponent', () => {
  let component: AdminnewComponent;
  let fixture: ComponentFixture<AdminnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
