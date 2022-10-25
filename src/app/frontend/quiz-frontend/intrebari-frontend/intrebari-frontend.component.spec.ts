import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrebariFrontendComponent } from './intrebari-frontend.component';

describe('IntrebariFrontendComponent', () => {
  let component: IntrebariFrontendComponent;
  let fixture: ComponentFixture<IntrebariFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrebariFrontendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrebariFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
