import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrebariBazeDeDateComponent } from './intrebari-baze-de-date.component';

describe('IntrebariBazeDeDateComponent', () => {
  let component: IntrebariBazeDeDateComponent;
  let fixture: ComponentFixture<IntrebariBazeDeDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrebariBazeDeDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrebariBazeDeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
