import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrebariBazeDeDateDistribuiteComponent } from './intrebari-baze-de-date-distribuite.component';

describe('IntrebariBazeDeDateDistribuiteComponent', () => {
  let component: IntrebariBazeDeDateDistribuiteComponent;
  let fixture: ComponentFixture<IntrebariBazeDeDateDistribuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrebariBazeDeDateDistribuiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrebariBazeDeDateDistribuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
