import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { ativoService } from 'src/app/services/ativoService';

@Component({
  selector: 'app-novo-ativo',
  templateUrl: './novo-ativo.component.html',
  styleUrls: ['./novo-ativo.component.css']
})
export class NovoAtivoComponent implements OnInit{
  public faArrowAltCircleLeft = faArrowAltCircleLeft;
  public form: FormGroup;

  constructor(
    public formBuilder : FormBuilder,
    private rest : ativoService
  ){
    this.form = this.formBuilder.group({
      nomeAtivo : new FormControl('',[Validators.required,Validators.maxLength(30)]),
      nomeAtivoCompleto : new FormControl('',[Validators.required,Validators.maxLength(255)]),
      seguimentoAtivo : new FormControl('',[Validators.required,Validators.maxLength(30)]),
      qtdCotas : new FormControl('',[Validators.required,Validators.maxLength(30)]),
      flVendido : false,
      dtCadastro : new FormControl('',[Validators.required,Validators.maxLength(30)]),
      imagem : new FormControl('',[Validators.maxLength(30)]),
      tipoAtivoId : new FormControl('',[Validators.required,Validators.maxLength(30)]),
      estimativaVenda: new FormControl('',[Validators.required,Validators.maxLength(30)]),
      valorCota: new FormControl('',[Validators.required,Validators.maxLength(30)]),
      corretora: new FormControl('',[Validators.required,Validators.maxLength(30)]),
      estrategia: new FormControl('',[Validators.required,Validators.maxLength(30)]),
      valorCompra: new FormControl('',[Validators.required,Validators.maxLength(30)]),
    })
  }

  salvarDados(){
    this.rest.CadastrarAtivo(this.form.value).subscribe(result => []);
    this.form.reset();
  }

  ngOnInit(): void {
    
  }
}
