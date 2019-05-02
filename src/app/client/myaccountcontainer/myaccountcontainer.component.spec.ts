import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountcontainerComponent } from './myaccountcontainer.component';

describe('MyaccountcontainerComponent', () => {
  let component: MyaccountcontainerComponent;
  let fixture: ComponentFixture<MyaccountcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
