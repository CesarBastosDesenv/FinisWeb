import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ativoService } from 'src/app/services/ativoService';
import { HttpClient } from '@angular/common/http';
import { ativo } from 'src/app/models/ativo';
import { paginadorQuery } from 'src/app/seletores/paginadorQuery';


@Component({
  selector: 'app-visualizar-carteira',
  templateUrl: './visualizar-carteira.component.html',
  styleUrls: ['./visualizar-carteira.component.css']
})

export class VisualizarCarteiraComponent implements OnInit {
public faPlusCircle = faPlusCircle;
public faChartLine = faChartLine;
public faCartPlus = faCartPlus;
public faRocket = faRocket;
public faCartArrowDown = faCartArrowDown;
public listaAtivos: ativo[] = [] ;
public PageNumber = 1;
public PageSize = 9;
public TotalLista = 0;


  constructor(
   
    private http: HttpClient,
    public ativoService: ativoService,
    public router: Router,
 
  ){
   
  }
//Paginações
  public pageChange(page: any) {
    this.PageNumber = page;
    this.listarAtivos();
}

//Listagens
  public listarAtivos(){
    let Paginador = new paginadorQuery();
    Paginador.PageNumber = this.PageNumber;
    Paginador.PageSize = this.PageSize;
    
 
    this.ativoService.ListarAtivo(Paginador).subscribe(res => {
      this.listaAtivos = res.data;
      this.TotalLista = res.totalCount;
       //console.log(this.listaAtivoPorTipo);
    })
  }

  

  ngOnInit(): void {
    this.listarAtivos();
    
  }
}
