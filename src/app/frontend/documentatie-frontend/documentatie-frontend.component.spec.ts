import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentatieFrontendComponent } from './documentatie-frontend.component';

describe('DocumentatieFrontendComponent', () => {
  let component: DocumentatieFrontendComponent;
  let fixture: ComponentFixture<DocumentatieFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentatieFrontendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentatieFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
