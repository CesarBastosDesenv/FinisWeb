import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { ativo } from 'src/app/models/ativo';
import { ativoService } from 'src/app/services/ativoService';
import { compraAtivoService } from 'src/app/services/compraAtivoService';

@Component({
  selector: 'app-aporte-ativos',
  templateUrl: './aporte-ativos.component.html',
  styleUrls: ['./aporte-ativos.component.css']
})
export class AporteAtivosComponent implements OnInit{
public faArrowAltCircleLeft = faArrowAltCircleLeft;
public form: FormGroup;
public id: '';
public listaAtivoPorId: ativo = new ativo();



  constructor(
    private activatedRoute: ActivatedRoute,
    public ativoService: ativoService,
     public formBuilder : FormBuilder,
     public changeDetector: ChangeDetectorRef,
     private rest : compraAtivoService
  ){
    this.id = this.activatedRoute.snapshot.params["id"];
    this.form = this.formBuilder.group({
              ativoId: new FormControl (this.activatedRoute.snapshot.params["id"]),  
              nomeAtivo: new FormControl('',[Validators.required,Validators.maxLength(30)]), 
              dtCompra : new FormControl('',[Validators.required,Validators.maxLength(30)]),
              qtdCotas : new FormControl(''),
              estimativaVenda : new FormControl('',[Validators.required,Validators.maxLength(30)]),
              valorCompra : new FormControl('',[Validators.required,Validators.maxLength(30)]),
              valorCota : new FormControl('',[Validators.required,Validators.maxLength(30)]),
              corretora : new FormControl('',[Validators.required,Validators.maxLength(30)]),
              estrategia : new FormControl('',[Validators.required,Validators.maxLength(30)]),
              flBolsa : new FormControl(''),
              flVendido: false
            })
  }

  public listarAtivoPorId(): void {
    this.ativoService.ListarAtivoPorId(this.id).subscribe(res => {
      console.log("Resposta da API:", res);

      this.listaAtivoPorId = res;

      console.log(" Valor de res.nomeAtivo:", res.nomeAtivo);

      this.form.patchValue({
        nomeAtivo: res.nomeAtivo
      });

      console.log("Form depois do patch:", this.form.value);

      this.changeDetector.detectChanges();
    })
  }

  salvarDados(){
    console.log("Enviando para API:", this.form.value);
    this.rest.CadastrarCompraAtivo(this.form.value).subscribe(result => {
      console.log("Resposta ao salvar:", result);
      this.form.reset();
  });
}

  ngOnInit(): void {
    this.listarAtivoPorId();
     //Passar o conteúdo do flBolsa de acordo com o valor da corretora
     this.form.get('corretora')?.valueChanges.subscribe(corretora => {
      if (corretora === 'Inter' || corretora === 'Avenue') {
        this.form.get('flBolsa')?.setValue('Eua');
      } else if (corretora === 'Inter-CDB' || corretora === 'C6-CDB'){
        this.form.get('flBolsa')?.setValue('CDB');
      } else if (corretora === 'Inter-Tesouro' || corretora === 'Rico-Tesouro'){
        this.form.get('flBolsa')?.setValue('Tesouro');
      } else {
        this.form.get('flBolsa')?.setValue('CC');
      }
    });
  }

 
 
  }

 


