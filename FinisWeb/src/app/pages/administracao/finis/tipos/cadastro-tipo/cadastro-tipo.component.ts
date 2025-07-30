import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { tipoAtivoService } from 'src/app/services/tipoAtivoService';

@Component({
  selector: 'app-cadastro-tipo',
  templateUrl: './cadastro-tipo.component.html',
  styleUrls: ['./cadastro-tipo.component.css']
})
export class CadastroTipoComponent implements OnInit {
  public faArrowAltCircleLeft = faArrowAltCircleLeft;
  public form: FormGroup;

  constructor(
    public formBuilder : FormBuilder,
    private rest : tipoAtivoService,
    private router: Router
  ){
    this.form = this.formBuilder.group({
      tipoNome : new FormControl('',[Validators.required,Validators.maxLength(30)]),
      status : true,
    })
  }

  salvarDados(){
    this.rest.CadastrarTipoAtivo(this.form.value).subscribe(result => []);
    this.form.reset();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    
  }

}
