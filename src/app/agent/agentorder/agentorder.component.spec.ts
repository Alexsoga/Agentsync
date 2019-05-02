import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentorderComponent } from './agentorder.component';

describe('AgentorderComponent', () => {
  let component: AgentorderComponent;
  let fixture: ComponentFixture<AgentorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
