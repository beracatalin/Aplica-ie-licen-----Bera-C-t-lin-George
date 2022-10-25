import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrebariProiectareWebComponent } from './intrebari-proiectare-web.component';

describe('IntrebariProiectareWebComponent', () => {
  let component: IntrebariProiectareWebComponent;
  let fixture: ComponentFixture<IntrebariProiectareWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrebariProiectareWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrebariProiectareWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
