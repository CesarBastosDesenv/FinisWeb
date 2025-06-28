import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarCarteiraComponent } from './visualizar-carteira.component';

describe('VisualizarCarteiraComponent', () => {
  let component: VisualizarCarteiraComponent;
  let fixture: ComponentFixture<VisualizarCarteiraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarCarteiraComponent]
    });
    fixture = TestBed.createComponent(VisualizarCarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
