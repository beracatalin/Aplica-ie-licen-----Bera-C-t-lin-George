import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrebariAlgoritmiComponent } from './intrebari-algoritmi.component';

describe('IntrebariAlgoritmiComponent', () => {
  let component: IntrebariAlgoritmiComponent;
  let fixture: ComponentFixture<IntrebariAlgoritmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrebariAlgoritmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrebariAlgoritmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
