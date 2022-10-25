import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentatieReteleDeCalculatoareComponent } from './documentatie-retele-de-calculatoare.component';

describe('DocumentatieReteleDeCalculatoareComponent', () => {
  let component: DocumentatieReteleDeCalculatoareComponent;
  let fixture: ComponentFixture<DocumentatieReteleDeCalculatoareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentatieReteleDeCalculatoareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentatieReteleDeCalculatoareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
