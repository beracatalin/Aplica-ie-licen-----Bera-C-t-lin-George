import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentatieAlgoritmiComponent } from './documentatie-algoritmi.component';

describe('DocumentatieAlgoritmiComponent', () => {
  let component: DocumentatieAlgoritmiComponent;
  let fixture: ComponentFixture<DocumentatieAlgoritmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentatieAlgoritmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentatieAlgoritmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
