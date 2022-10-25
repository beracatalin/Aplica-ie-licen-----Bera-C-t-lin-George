import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAlgoritmiComponent } from './quiz-algoritmi.component';

describe('QuizAlgoritmiComponent', () => {
  let component: QuizAlgoritmiComponent;
  let fixture: ComponentFixture<QuizAlgoritmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizAlgoritmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAlgoritmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
