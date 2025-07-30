import { Component, OnInit } from '@angular/core';
import { paginadorQuery } from 'src/app/seletores/paginadorQuery';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { contaService } from 'src/app/services/contaService';
import { conta } from 'src/app/models/conta';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CadastroContasComponent } from 'src/app/modals/cadastro-contas/cadastro-contas.component';

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
  bsModalRef?: BsModalRef;

  constructor(
    public contaService: contaService,
    public rest : contaService,
    private modalService: BsModalService,
  ){}

  public pageChange(page: any) {
    this.PageNumber = page;
    this.listarContas();
}

  abrirModal(){
    this.bsModalRef = this.modalService.show(CadastroContasComponent);
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
