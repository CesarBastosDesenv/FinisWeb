import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons';
import { compraAtivo } from 'src/app/models/compraAtivo';
import { PaginadorQueryId } from 'src/app/seletores/PaginadorQueryId';
import { compraAtivoService } from 'src/app/services/compraAtivoService';

@Component({
  selector: 'app-venda-ativo',
  templateUrl: './venda-ativo.component.html',
  styleUrls: ['./venda-ativo.component.css']
})
export class VendaAtivoComponent implements OnInit {
  public faArrowAltCircleLeft = faArrowAltCircleLeft;
  public faCommentDollar = faCommentDollar;
  public listaCompraAtivos: compraAtivo[] = [];
  public PageNumber = 1;
  public PageSize = 9;
  public TotalLista = 0;
  public ParamId = 0;
  public id = '';

  constructor(
        private activatedRoute: ActivatedRoute,
        public compraAtivoService: compraAtivoService,
  ){
        this.id = this.activatedRoute.snapshot.params["id"];
        this.ParamId = this.activatedRoute.snapshot.params["id"];
  }

  public pageChange(page: any) {
    this.PageNumber = page;
    this.listarCompraAtivos();
}

//Listagens
  public listarCompraAtivos(){
    let Paginador = new PaginadorQueryId();
    Paginador.PageNumber = this.PageNumber;
    Paginador.PageSize = this.PageSize;
    Paginador.ParamId = this.ParamId;
    
 
    this.compraAtivoService.ListarCompraAtivoPorIdParams(Paginador).subscribe(res => {
      this.listaCompraAtivos = res.data;
      this.TotalLista = res.totalCount;
      
    })
  }


  ngOnInit(): void {
    this.listarCompraAtivos();
  }

}
