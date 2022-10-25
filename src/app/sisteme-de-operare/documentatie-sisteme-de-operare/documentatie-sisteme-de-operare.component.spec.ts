import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentatieSistemeDeOperareComponent } from './documentatie-sisteme-de-operare.component';

describe('DocumentatieSistemeDeOperareComponent', () => {
  let component: DocumentatieSistemeDeOperareComponent;
  let fixture: ComponentFixture<DocumentatieSistemeDeOperareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentatieSistemeDeOperareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentatieSistemeDeOperareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
