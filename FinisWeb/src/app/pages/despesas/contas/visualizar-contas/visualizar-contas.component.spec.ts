import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarContasComponent } from './visualizar-contas.component';

describe('VisualizarContasComponent', () => {
  let component: VisualizarContasComponent;
  let fixture: ComponentFixture<VisualizarContasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarContasComponent]
    });
    fixture = TestBed.createComponent(VisualizarContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
