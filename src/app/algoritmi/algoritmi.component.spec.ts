import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoritmiComponent } from './algoritmi.component';

describe('AlgoritmiComponent', () => {
  let component: AlgoritmiComponent;
  let fixture: ComponentFixture<AlgoritmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoritmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoritmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
