import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AporteAtivosComponent } from './aporte-ativos.component';

describe('AporteAtivosComponent', () => {
  let component: AporteAtivosComponent;
  let fixture: ComponentFixture<AporteAtivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AporteAtivosComponent]
    });
    fixture = TestBed.createComponent(AporteAtivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
