import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMovimentacaoComponent } from './cadastrar-movimentacao.component';

describe('CadastrarMovimentacaoComponent', () => {
  let component: CadastrarMovimentacaoComponent;
  let fixture: ComponentFixture<CadastrarMovimentacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarMovimentacaoComponent]
    });
    fixture = TestBed.createComponent(CadastrarMovimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
