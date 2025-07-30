import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDespesasRecorrentesComponent } from './editar-despesas-recorrentes.component';

describe('EditarDespesasRecorrentesComponent', () => {
  let component: EditarDespesasRecorrentesComponent;
  let fixture: ComponentFixture<EditarDespesasRecorrentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarDespesasRecorrentesComponent]
    });
    fixture = TestBed.createComponent(EditarDespesasRecorrentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
