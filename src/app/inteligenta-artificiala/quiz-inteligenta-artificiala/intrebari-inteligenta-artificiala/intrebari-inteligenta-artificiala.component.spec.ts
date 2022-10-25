import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrebariInteligentaArtificialaComponent } from './intrebari-inteligenta-artificiala.component';

describe('IntrebariInteligentaArtificialaComponent', () => {
  let component: IntrebariInteligentaArtificialaComponent;
  let fixture: ComponentFixture<IntrebariInteligentaArtificialaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrebariInteligentaArtificialaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrebariInteligentaArtificialaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
