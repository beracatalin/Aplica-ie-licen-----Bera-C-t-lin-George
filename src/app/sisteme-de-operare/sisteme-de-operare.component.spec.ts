import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemeDeOperareComponent } from './sisteme-de-operare.component';

describe('SistemeDeOperareComponent', () => {
  let component: SistemeDeOperareComponent;
  let fixture: ComponentFixture<SistemeDeOperareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemeDeOperareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemeDeOperareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
