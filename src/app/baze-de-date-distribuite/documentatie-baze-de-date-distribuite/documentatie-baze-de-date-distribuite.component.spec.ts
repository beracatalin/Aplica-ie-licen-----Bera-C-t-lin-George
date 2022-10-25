import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentatieBazeDeDateDistribuiteComponent } from './documentatie-baze-de-date-distribuite.component';

describe('DocumentatieBazeDeDateDistribuiteComponent', () => {
  let component: DocumentatieBazeDeDateDistribuiteComponent;
  let fixture: ComponentFixture<DocumentatieBazeDeDateDistribuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentatieBazeDeDateDistribuiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentatieBazeDeDateDistribuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
