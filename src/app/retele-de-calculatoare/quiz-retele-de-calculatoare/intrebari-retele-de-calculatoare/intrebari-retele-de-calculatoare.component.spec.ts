import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrebariReteleDeCalculatoareComponent } from './intrebari-retele-de-calculatoare.component';

describe('IntrebariReteleDeCalculatoareComponent', () => {
  let component: IntrebariReteleDeCalculatoareComponent;
  let fixture: ComponentFixture<IntrebariReteleDeCalculatoareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrebariReteleDeCalculatoareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrebariReteleDeCalculatoareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
