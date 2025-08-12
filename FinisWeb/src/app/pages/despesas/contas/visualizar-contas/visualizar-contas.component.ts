import { Component, OnInit } from '@angular/core';
import { paginadorQuery } from 'src/app/seletores/paginadorQuery';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { contaService } from 'src/app/services/contaService';
import { conta } from 'src/app/models/conta';
import { movimentacaoService } from 'src/app/services/movimentacaoService';
import { movimentacao } from 'src/app/models/movimentacao';


@Component({
  selector: 'app-visualizar-contas',
  templateUrl: './visualizar-contas.component.html',
  styleUrls: ['./visualizar-contas.component.css']
})
export class VisualizarContasComponent implements OnInit{
  public listacontas:conta[]=[];
  public listamovimentacao:movimentacao[]=[];
  public faMoneyBillWave = faMoneyBillWave;
  public faEdit = faEdit;
  public PageNumber = 1;
  public PageSize = 8;
  public TotalLista = 0;


  constructor(
    public contaService: contaService,
    public movimentacaoService: movimentacaoService,
    public rest : contaService,
    public rest1 : movimentacaoService,
  
  ){}

  public pageChange(page: any) {
    this.PageNumber = page;
    this.listarContas();
}

  public pageChange1(page: any) {
    this.PageNumber = page;
    this.listarContas();
}

  
  listarContas(){
    let Paginador = new paginadorQuery();
    Paginador.PageNumber = this.PageNumber;
    Paginador.PageSize = this.PageSize;

    this.contaService.ListarConta(Paginador).subscribe(res => {
      this.listacontas = res.data;
      this.TotalLista = res.totalCount;
    })
  }

  listarMovimentacao(){
    let Paginador = new paginadorQuery();
    Paginador.PageNumber = this.PageNumber;
    Paginador.PageSize = this.PageSize;

    this.movimentacaoService.ListarMovimentacao(Paginador).subscribe(res1 => {
      this.listamovimentacao = res1.data;
      this.TotalLista = res1.totalCount;
    })
  }

  ngOnInit(): void {
    this.listarContas();
    this.listarMovimentacao();
  }

}
