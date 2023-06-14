import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLaureatComponent } from './card-laureat.component';

describe('CardLaureatComponent', () => {
  let component: CardLaureatComponent;
  let fixture: ComponentFixture<CardLaureatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardLaureatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardLaureatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
