import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import { faReplyAll } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { historicoAtivo } from 'src/app/models/historicoAtivo';
import { historicoAtivoService } from 'src/app/services/historicoAtivoService';
import { ativoService } from 'src/app/services/ativoService';
import { ativo } from 'src/app/models/ativo';
import { rendimento } from 'src/app/models/rendimento';
import { rendimentoService } from 'src/app/services/rendimentoService';
import { PaginadorQueryId } from 'src/app/seletores/PaginadorQueryId';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-evolucao-ativo',
  templateUrl: './evolucao-ativo.component.html',
  styleUrls: ['./evolucao-ativo.component.css']
})
export class EvolucaoAtivoComponent implements OnInit {
 public faHandHoldingUsd = faHandHoldingUsd;
 public faShareSquare = faShareSquare;
 public faFlagCheckered = faFlagCheckered;
 public faReplyAll = faReplyAll;
 public faMoneyBillAlt = faMoneyBillAlt;
 public listaHistoricoAtivo: historicoAtivo[] = []; 
 public listaAtivoPorId: ativo = new ativo();
 public listaRendimento: rendimento[] = [];
 public id = '';
 public form: FormGroup;
 ano: number = new Date().getFullYear();
 public PageNumber = 1;
 public PageSize = 9;
 public TotalLista = 0;
 public ParamId = 0;


  constructor(
    private activatedRoute: ActivatedRoute,
    public historicoAtivoService: historicoAtivoService,
    public rendimentoService: rendimentoService,
    public ativoService: ativoService,
    public changeDetector: ChangeDetectorRef,
    public formBuilder : FormBuilder,
    private rest : historicoAtivoService,
    private datePipe: DatePipe,
  ) {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.ParamId = this.activatedRoute.snapshot.params["id"];
     this.form = this.formBuilder.group({   
      AtivoId : this.activatedRoute.snapshot.params["id"],
      descricao : new FormControl('',[Validators.required,Validators.maxLength(255)]),
      dtHistorico : this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
    
    })
  }

  public pageChange(page: any) {
    this.PageNumber = page;
    this.listarRendimentos();
}

  salvarDados(){
    this.rest.CadastrarHistoricoAtivo(this.form.value).subscribe(result => []);
    this.form.reset();
    this.form = this.formBuilder.group({   
      AtivoId : this.id,
      descricao : new FormControl('',[Validators.required,Validators.maxLength(255)]),
      dtHistorico : this.datePipe.transform(new Date(), 'yyyy-MM-dd')});
    this.changeDetector.detectChanges();
    this.listarHistoricoAtivoPorId();
    
  }

  public listarHistoricoAtivoPorId(): void {
    this.historicoAtivoService.ListarHistoricoAtivoPorId(this.id).subscribe(res => {
      this.listaHistoricoAtivo = res.data;
      this.changeDetector.detectChanges();
       // console.log(this.listaHistoricoAtivo);
    })
  }

  public listarAtivoPorId(): void {
    this.ativoService.ListarAtivoPorId(this.id).subscribe(res => {
      this.listaAtivoPorId = res.data;
      this.changeDetector.detectChanges();
    })
  }

  public listarRendimentos(){
      let Paginador = new PaginadorQueryId();
      Paginador.PageNumber = this.PageNumber;
      Paginador.PageSize = this.PageSize;
      Paginador.ParamId = this.ParamId;
      
   
      this.rendimentoService.ListarRendimentoPorIdParams(Paginador).subscribe(res => {
        this.listaRendimento = res.data;
        this.TotalLista = res.totalCount;
      })
    }
  
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
     ],
  };
  
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: false,
  };
  
  public barChartLegend = true;






    ngOnInit(): void {
      this.listarHistoricoAtivoPorId();
      this.listarAtivoPorId();
      this.listarRendimentos();
    }
}
