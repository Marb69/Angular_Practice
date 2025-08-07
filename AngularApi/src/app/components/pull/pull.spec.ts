import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pull } from './pull';

describe('Pull', () => {
  let component: Pull;
  let fixture: ComponentFixture<Pull>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pull]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pull);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
