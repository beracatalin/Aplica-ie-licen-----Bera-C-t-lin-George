import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFrontendComponent } from './quiz-frontend.component';

describe('QuizFrontendComponent', () => {
  let component: QuizFrontendComponent;
  let fixture: ComponentFixture<QuizFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizFrontendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
