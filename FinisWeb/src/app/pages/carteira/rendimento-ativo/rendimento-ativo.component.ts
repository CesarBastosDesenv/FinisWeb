import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { rendimentoService } from 'src/app/services/rendimentoService';

@Component({
  selector: 'app-rendimento-ativo',
  templateUrl: './rendimento-ativo.component.html',
  styleUrls: ['./rendimento-ativo.component.css']
})
export class RendimentoAtivoComponent implements OnInit  {
public faArrowAltCircleLeft = faArrowAltCircleLeft;
public form: FormGroup;
public id: '';

  constructor(
    private activatedRoute: ActivatedRoute,
    public rendimentoService: rendimentoService,
    public formBuilder : FormBuilder,
    private rest : rendimentoService,
    public changeDetector: ChangeDetectorRef,
  ) {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.form = this.formBuilder.group({   
          AtivoId : this.activatedRoute.snapshot.params["id"],
          mesRendimento : new FormControl('',[Validators.required,Validators.maxLength(20)]),
          anoRendimento : new FormControl('',[Validators.required,Validators.maxLength(20)]),
          qtdCotas : new FormControl('',[Validators.required,Validators.maxLength(20)]),
          valorRendimento : new FormControl('',[Validators.required,Validators.maxLength(20)]),
          valorRendimentoReais : new FormControl('',[Validators.required,Validators.maxLength(20)]),
          flBolsa : new FormControl('',[Validators.required,Validators.maxLength(20)]),
          corretora : new FormControl('',[Validators.required,Validators.maxLength(20)]),
          dtRendimento : new FormControl('',[Validators.required,Validators.maxLength(20)]),
        })
  }

  salvarDados(){
    this.rest.CadastrarRendimento(this.form.value).subscribe(result => []);
    this.form.reset();
    this.form = this.formBuilder.group({   
          AtivoId : this.activatedRoute.snapshot.params["id"],
          mesRendimento : new FormControl('',[Validators.required,Validators.maxLength(20)]),
          anoRendimento : new FormControl('',[Validators.required,Validators.maxLength(20)]),
          qtdCotas : new FormControl('',[Validators.required,Validators.maxLength(20)]),
          valorRendimento : new FormControl('',[Validators.required,Validators.maxLength(20)]),
          valorRendimentoReais : new FormControl('',[Validators.required,Validators.maxLength(20)]),
          flBolsa : new FormControl('',[Validators.required,Validators.maxLength(20)]),
          corretora : new FormControl('',[Validators.required,Validators.maxLength(20)]),
          dtRendimento : new FormControl('',[Validators.required,Validators.maxLength(20)]),});
    this.changeDetector.detectChanges();
    
    }

  ngOnInit(): void {
    
  }

}
