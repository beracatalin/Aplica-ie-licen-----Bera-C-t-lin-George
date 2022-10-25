import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BazeDeDateComponent } from './baze-de-date.component';

describe('BazeDeDateComponent', () => {
  let component: BazeDeDateComponent;
  let fixture: ComponentFixture<BazeDeDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BazeDeDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BazeDeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
