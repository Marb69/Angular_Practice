import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardpokemon } from './cardpokemon';

describe('Cardpokemon', () => {
  let component: Cardpokemon;
  let fixture: ComponentFixture<Cardpokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardpokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardpokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
