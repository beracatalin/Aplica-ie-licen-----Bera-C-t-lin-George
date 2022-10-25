import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizInteligentaArtificialaComponent } from './quiz-inteligenta-artificiala.component';

describe('QuizInteligentaArtificialaComponent', () => {
  let component: QuizInteligentaArtificialaComponent;
  let fixture: ComponentFixture<QuizInteligentaArtificialaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizInteligentaArtificialaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizInteligentaArtificialaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
