import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitingdateComponent } from './visitingdate.component';

describe('VisitingdateComponent', () => {
  let component: VisitingdateComponent;
  let fixture: ComponentFixture<VisitingdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitingdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitingdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
