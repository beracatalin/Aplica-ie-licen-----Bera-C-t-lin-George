import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BazeDeDateDistribuiteComponent } from './baze-de-date-distribuite.component';

describe('BazeDeDateDistribuiteComponent', () => {
  let component: BazeDeDateDistribuiteComponent;
  let fixture: ComponentFixture<BazeDeDateDistribuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BazeDeDateDistribuiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BazeDeDateDistribuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
