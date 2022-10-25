import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReteleDeCalculatoareComponent } from './retele-de-calculatoare.component';

describe('ReteleDeCalculatoareComponent', () => {
  let component: ReteleDeCalculatoareComponent;
  let fixture: ComponentFixture<ReteleDeCalculatoareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReteleDeCalculatoareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReteleDeCalculatoareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
