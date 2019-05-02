import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitingtimeComponent } from './visitingtime.component';

describe('VisitingtimeComponent', () => {
  let component: VisitingtimeComponent;
  let fixture: ComponentFixture<VisitingtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitingtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitingtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
