import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteligentaArtificialaComponent } from './inteligenta-artificiala.component';

describe('InteligentaArtificialaComponent', () => {
  let component: InteligentaArtificialaComponent;
  let fixture: ComponentFixture<InteligentaArtificialaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteligentaArtificialaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteligentaArtificialaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
