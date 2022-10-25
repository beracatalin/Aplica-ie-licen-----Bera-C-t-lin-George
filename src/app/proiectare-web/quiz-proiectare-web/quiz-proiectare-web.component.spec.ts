import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizProiectareWebComponent } from './quiz-proiectare-web.component';

describe('QuizProiectareWebComponent', () => {
  let component: QuizProiectareWebComponent;
  let fixture: ComponentFixture<QuizProiectareWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizProiectareWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizProiectareWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
