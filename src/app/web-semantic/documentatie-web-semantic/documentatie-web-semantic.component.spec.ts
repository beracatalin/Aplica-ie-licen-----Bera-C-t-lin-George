import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentatieWebSemanticComponent } from './documentatie-web-semantic.component';

describe('DocumentatieWebSemanticComponent', () => {
  let component: DocumentatieWebSemanticComponent;
  let fixture: ComponentFixture<DocumentatieWebSemanticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentatieWebSemanticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentatieWebSemanticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
