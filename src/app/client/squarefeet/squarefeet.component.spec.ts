import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquarefeetComponent } from './squarefeet.component';

describe('SquarefeetComponent', () => {
  let component: SquarefeetComponent;
  let fixture: ComponentFixture<SquarefeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquarefeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquarefeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
