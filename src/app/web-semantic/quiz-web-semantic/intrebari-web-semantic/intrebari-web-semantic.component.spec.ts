import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrebariWebSemanticComponent } from './intrebari-web-semantic.component';

describe('IntrebariWebSemanticComponent', () => {
  let component: IntrebariWebSemanticComponent;
  let fixture: ComponentFixture<IntrebariWebSemanticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrebariWebSemanticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrebariWebSemanticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
