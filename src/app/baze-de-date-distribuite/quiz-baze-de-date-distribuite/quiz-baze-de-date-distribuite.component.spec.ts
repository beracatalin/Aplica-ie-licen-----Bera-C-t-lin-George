import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBazeDeDateDistribuiteComponent } from './quiz-baze-de-date-distribuite.component';

describe('QuizBazeDeDateDistribuiteComponent', () => {
  let component: QuizBazeDeDateDistribuiteComponent;
  let fixture: ComponentFixture<QuizBazeDeDateDistribuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizBazeDeDateDistribuiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBazeDeDateDistribuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
