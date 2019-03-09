import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemFormComponent } from './redeem-form.component';

describe('RedeemFormComponent', () => {
  let component: RedeemFormComponent;
  let fixture: ComponentFixture<RedeemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
