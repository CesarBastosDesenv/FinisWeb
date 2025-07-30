import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarDespesasRecorrentesComponent } from './visualizar-despesas-recorrentes.component';

describe('VisualizarDespesasRecorrentesComponent', () => {
  let component: VisualizarDespesasRecorrentesComponent;
  let fixture: ComponentFixture<VisualizarDespesasRecorrentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarDespesasRecorrentesComponent]
    });
    fixture = TestBed.createComponent(VisualizarDespesasRecorrentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
