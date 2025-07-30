import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { tipoAtivo } from 'src/app/models/tipoAtivo';
import { tipoAtivoService } from 'src/app/services/tipoAtivoService';
import { paginadorQuery } from 'src/app/seletores/paginadorQuery';

@Component({
  selector: 'app-visualizar-tipo',
  templateUrl: './visualizar-tipo.component.html',
  styleUrls: ['./visualizar-tipo.component.css']
})
export class VisualizarTipoComponent implements OnInit{
  public faPlusCircle =  faPlusCircle;
  public faEdit =  faEdit;
  public listaTipoAtivo:tipoAtivo[] = [];
  public PageNumber = 1;
  public PageSize = 8;
  public TotalLista = 0;

  constructor(
    public tipoAtivoService : tipoAtivoService,
    private rest : tipoAtivoService
  ){}

  public pageChange(page: any) {
    this.PageNumber = page;
    this.listarTipoAtivo();
}

  listarTipoAtivo(){
    let Paginador = new paginadorQuery();
    Paginador.PageNumber = this.PageNumber;
    Paginador.PageSize = this.PageSize;

    this.tipoAtivoService.ListarTipoAtivo(Paginador).subscribe(res => {
      this.listaTipoAtivo = res.data;
      this.TotalLista = res.totalCount;
    })
  }

  ngOnInit(): void {
    this.listarTipoAtivo(); 
  }
}
