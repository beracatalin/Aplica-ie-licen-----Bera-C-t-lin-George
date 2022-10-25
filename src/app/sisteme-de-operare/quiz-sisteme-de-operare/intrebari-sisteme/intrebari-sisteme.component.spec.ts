import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrebariSistemeComponent } from './intrebari-sisteme.component';

describe('IntrebariSistemeComponent', () => {
  let component: IntrebariSistemeComponent;
  let fixture: ComponentFixture<IntrebariSistemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrebariSistemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrebariSistemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
