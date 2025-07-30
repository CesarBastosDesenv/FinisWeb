import { Component, OnInit } from '@angular/core';
import { paginadorQuery } from 'src/app/seletores/paginadorQuery';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { contaService } from 'src/app/services/contaService';
import { conta } from 'src/app/models/conta';


@Component({
  selector: 'app-visualizar-contas',
  templateUrl: './visualizar-contas.component.html',
  styleUrls: ['./visualizar-contas.component.css']
})
export class VisualizarContasComponent implements OnInit{
  public listacontas:conta[]=[];
  public faMoneyBillWave = faMoneyBillWave;
  public faEdit = faEdit;
  public PageNumber = 1;
  public PageSize = 8;
  public TotalLista = 0;


  constructor(
    public contaService: contaService,
    public rest : contaService,
  
  ){}

  public pageChange(page: any) {
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

  ngOnInit(): void {
    this.listarContas();
  }

}
