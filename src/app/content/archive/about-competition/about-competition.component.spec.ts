import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCompetitionComponent } from './about-competition.component';

describe('AboutCompetitionComponent', () => {
  let component: AboutCompetitionComponent;
  let fixture: ComponentFixture<AboutCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutCompetitionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
