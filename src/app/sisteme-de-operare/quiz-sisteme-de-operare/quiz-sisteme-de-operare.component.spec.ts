import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSistemeDeOperareComponent } from './quiz-sisteme-de-operare.component';

describe('QuizSistemeDeOperareComponent', () => {
  let component: QuizSistemeDeOperareComponent;
  let fixture: ComponentFixture<QuizSistemeDeOperareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizSistemeDeOperareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSistemeDeOperareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
