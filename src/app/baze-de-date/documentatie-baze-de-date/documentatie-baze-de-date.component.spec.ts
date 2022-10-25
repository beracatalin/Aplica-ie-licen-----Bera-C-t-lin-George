import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentatieBazeDeDateComponent } from './documentatie-baze-de-date.component';

describe('DocumentatieBazeDeDateComponent', () => {
  let component: DocumentatieBazeDeDateComponent;
  let fixture: ComponentFixture<DocumentatieBazeDeDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentatieBazeDeDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentatieBazeDeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
