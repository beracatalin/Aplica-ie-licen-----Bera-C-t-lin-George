import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizWebSemanticComponent } from './quiz-web-semantic.component';

describe('QuizWebSemanticComponent', () => {
  let component: QuizWebSemanticComponent;
  let fixture: ComponentFixture<QuizWebSemanticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizWebSemanticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizWebSemanticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
