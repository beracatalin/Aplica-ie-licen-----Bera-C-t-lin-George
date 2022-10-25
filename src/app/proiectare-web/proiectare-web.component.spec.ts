import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProiectareWebComponent } from './proiectare-web.component';

describe('ProiectareWebComponent', () => {
  let component: ProiectareWebComponent;
  let fixture: ComponentFixture<ProiectareWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProiectareWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProiectareWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
