import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonvComponent } from './addonv.component';

describe('AddonvComponent', () => {
  let component: AddonvComponent;
  let fixture: ComponentFixture<AddonvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddonvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
