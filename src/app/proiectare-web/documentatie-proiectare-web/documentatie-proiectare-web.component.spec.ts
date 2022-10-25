import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentatieProiectareWebComponent } from './documentatie-proiectare-web.component';

describe('DocumentatieProiectareWebComponent', () => {
  let component: DocumentatieProiectareWebComponent;
  let fixture: ComponentFixture<DocumentatieProiectareWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentatieProiectareWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentatieProiectareWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
