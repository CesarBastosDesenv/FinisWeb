import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { contaService } from 'src/app/services/contaService';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cadastrar-contas',
  templateUrl: './cadastrar-contas.component.html', 
  styleUrls: ['./cadastrar-contas.component.css'],
  
})
export class CadastrarContasComponent implements OnInit{
  public faArrowAltCircleLeft = faArrowAltCircleLeft;
  public form: FormGroup;


  constructor(
     public formBuilder : FormBuilder,
     private rest : contaService
  ){
    this.form = this.formBuilder.group({
          nomeConta : new FormControl('',[Validators.required,Validators.maxLength(30)]),
          contaPaiId : new FormControl('',[Validators.required,Validators.maxLength(30)]),
          valorSaldo : new FormControl('',[Validators.required,Validators.pattern(/^\d{1,10}(\.\d{1,2})?$/)]),
          dataCriacao : new FormControl('',[Validators.required,Validators.maxLength(30)]),
          instituicao : new FormControl('',[Validators.required,Validators.maxLength(30)]),
          status : true,
        })
  }

  salvarDados(){
    this.rest.CadastrarConta(this.form.value).subscribe(result => []);
    this.form.reset();
  }
  ngOnInit(): void {
    
  }

}
