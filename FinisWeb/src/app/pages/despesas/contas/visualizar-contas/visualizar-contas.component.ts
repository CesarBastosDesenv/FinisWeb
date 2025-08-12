import { Component, OnInit } from '@angular/core';
import { paginadorQuery } from 'src/app/seletores/paginadorQuery';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { contaService } from 'src/app/services/contaService';
import { conta } from 'src/app/models/conta';
import { movimentacaoService } from 'src/app/services/movimentacaoService';
import { movimentacao } from 'src/app/models/movimentacao';
import { ChartConfiguration, ChartOptions } from 'chart.js';


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
  public PageSize = 4;
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
//Grafico de linha
  title = 'ng2-charts-demo';
  
    public lineChartData: ChartConfiguration<'line'>['data'] = {
      labels: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez'
      ],
      datasets: [
        {
          data: [ 65, 59, 80, 81, 56, 55, 40, 58, 26, 59, 10 ,15 ],
          label: 'Series A',
          fill: true,
          tension: 0.5,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)'
        }
      ]
    };
    public lineChartOptions: ChartOptions<'line'> = {
      responsive: false
    };
    public lineChartLegend = true;

//Grafico de barras
title1 = 'ng2-charts-demo';

public barChartData: ChartConfiguration<'bar'>['data'] = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov','Dez'],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40, 10, 15, 89, 90, 2],
      label: 'Series A',
      backgroundColor: 'rgba(90, 81, 81, 0.3)',
      borderColor: 'black',
      borderWidth: 1,
    },
    {
      data: [40, 50, 60, 70, 80, 90, 100, 15, 20, 48, 2, 48],
      label: 'Series B',
      backgroundColor: 'rgba(0, 0, 255, 0.3)',
      borderColor: 'black',
      borderWidth: 1,
    },
   
  ],
};

public barChartOptions: ChartOptions<'bar'> = {
  responsive: false,
};

public barChartLegend = true;

//pizza

title3 = 'ng2-charts-demo';

public pieChartData: ChartConfiguration<'pie'>['data'] = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 0, 0, 0.3)',
        'rgba(0, 255, 0, 0.3)',
        'rgba(0, 0, 255, 0.3)',
        'rgba(255, 255, 0, 0.3)',
        'rgba(255, 0, 255, 0.3)',
        'rgba(0, 255, 255, 0.3)',
        'rgba(128, 0, 0, 0.3)',
      ],
      borderColor: 'black',
      borderWidth: 1,
    },
  ],
};

public pieChartOptions: ChartOptions<'pie'> = {
  responsive: false,
};



title4 = 'ng2-charts-demo';

public pieChartData1: ChartConfiguration<'pie'>['data'] = {
  labels: ['Salario', 'Dividendos',],
  datasets: [
    {
      data: [65, 59 ],
      backgroundColor: [
        'rgba(255, 0, 0, 0.3)',
        'rgba(0, 255, 0, 0.3)',
       
      ],
      borderColor: 'black',
      borderWidth: 1,
    },
  ],
};

public pieChartOptions1: ChartOptions<'pie'> = {
  responsive: false,
};
public pieChartLegend = true;

  ngOnInit(): void {
    this.listarContas();
    this.listarMovimentacao();
  }

}
