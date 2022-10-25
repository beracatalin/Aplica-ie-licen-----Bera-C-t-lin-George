import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSemanticComponent } from './web-semantic.component';

describe('WebSemanticComponent', () => {
  let component: WebSemanticComponent;
  let fixture: ComponentFixture<WebSemanticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSemanticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSemanticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
