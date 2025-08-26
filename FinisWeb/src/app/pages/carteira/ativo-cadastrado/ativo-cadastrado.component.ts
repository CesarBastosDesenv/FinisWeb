import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { ativo } from 'src/app/models/ativo';
import { ativoService } from 'src/app/services/ativoService';
import { compraAtivoService } from 'src/app/services/compraAtivoService';

@Component({
  selector: 'app-ativo-cadastrado',
  templateUrl: './ativo-cadastrado.component.html',
  styleUrls: ['./ativo-cadastrado.component.css']
})
export class AtivoCadastradoComponent implements OnInit{
  public faArrowAltCircleLeft = faArrowAltCircleLeft;
  public listaAtivoSemParam: ativo[] = [];
  public form: FormGroup;
  

  constructor(
    public ativoService: ativoService,
    public compraAtivoService: compraAtivoService,
    public changeDetector: ChangeDetectorRef,
    public formBuilder : FormBuilder,
    private rest : compraAtivoService
  ){
    this.form = this.formBuilder.group({
          ativoId: new FormControl(null, Validators.required),   // começa vazio
          nomeAtivo: new FormControl('', Validators.required), 
          dtCompra : new FormControl('',[Validators.required,Validators.maxLength(30)]),
          qtdCotas : new FormControl('',[Validators.required,Validators.maxLength(30)]),
          estimativaVenda : new FormControl('',[Validators.required,Validators.maxLength(30)]),
          valorCompra : new FormControl('',[Validators.required,Validators.maxLength(30)]),
          valorCota : new FormControl('',[Validators.required,Validators.maxLength(30)]),
          corretora : new FormControl('',[Validators.required,Validators.maxLength(30)]),
          estrategia : new FormControl('',[Validators.required,Validators.maxLength(30)]),
          flBolsa : new FormControl(''),
          flVendido: false
        })
    
  }

  public listarAtivoSemParam(): void {
    this.ativoService.ListarAtivoSemParam().subscribe(res => {
      this.listaAtivoSemParam = res;
      this.changeDetector.detectChanges();
      //console.log(res);
     // console.log("lista de ativos:", this.listaAtivoSemParam);
    })
  }

  salvarDados(){
    this.rest.CadastrarCompraAtivo(this.form.value).subscribe(result => []);
    this.form.reset();
  }

  ngOnInit(): void {
    //Passar o conteúdo do flBolsa de acordo com o valor da corretora
    this.listarAtivoSemParam();

    this.form.get('corretora')?.valueChanges.subscribe(corretora => {
      if (corretora === 'Inter') {
        this.form.get('flBolsa')?.setValue('Eua');
      } else {
        this.form.get('flBolsa')?.setValue('');
      }
    });

  }

  selectAtivo(event: any){
    this.form.patchValue({
      ativoId: event.target.value,
      nomeAtivo: this.listaAtivoSemParam.find(x => x.id == event.target.value)?.nomeAtivo
    });           
  }
}
