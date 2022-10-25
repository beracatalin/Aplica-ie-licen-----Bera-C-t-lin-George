import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizReteleDeCalculatoareComponent } from './quiz-retele-de-calculatoare.component';

describe('QuizReteleDeCalculatoareComponent', () => {
  let component: QuizReteleDeCalculatoareComponent;
  let fixture: ComponentFixture<QuizReteleDeCalculatoareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizReteleDeCalculatoareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizReteleDeCalculatoareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
