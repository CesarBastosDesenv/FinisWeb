import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarTipoComponent } from './visualizar-tipo.component';

describe('VisualizarTipoComponent', () => {
  let component: VisualizarTipoComponent;
  let fixture: ComponentFixture<VisualizarTipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarTipoComponent]
    });
    fixture = TestBed.createComponent(VisualizarTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
