import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonsvComponent } from './addonsv.component';

describe('AddonsvComponent', () => {
  let component: AddonsvComponent;
  let fixture: ComponentFixture<AddonsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddonsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
