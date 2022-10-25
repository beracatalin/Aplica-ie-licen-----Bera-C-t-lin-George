import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentatieInteligentaArtificialaComponent } from './documentatie-inteligenta-artificiala.component';

describe('DocumentatieInteligentaArtificialaComponent', () => {
  let component: DocumentatieInteligentaArtificialaComponent;
  let fixture: ComponentFixture<DocumentatieInteligentaArtificialaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentatieInteligentaArtificialaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentatieInteligentaArtificialaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
