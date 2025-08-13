import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBilling } from './update-billing';

describe('UpdateBilling', () => {
  let component: UpdateBilling;
  let fixture: ComponentFixture<UpdateBilling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBilling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBilling);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
