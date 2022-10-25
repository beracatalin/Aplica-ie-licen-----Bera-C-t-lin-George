import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBazeDeDateComponent } from './quiz-baze-de-date.component';

describe('QuizBazeDeDateComponent', () => {
  let component: QuizBazeDeDateComponent;
  let fixture: ComponentFixture<QuizBazeDeDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizBazeDeDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBazeDeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
