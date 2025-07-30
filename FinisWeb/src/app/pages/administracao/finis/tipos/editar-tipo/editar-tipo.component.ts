import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { tipoAtivo } from 'src/app/models/tipoAtivo';
import { tipoAtivoService } from 'src/app/services/tipoAtivoService';

@Component({
  selector: 'app-editar-tipo',
  templateUrl: './editar-tipo.component.html',
  styleUrls: ['./editar-tipo.component.css']
})
export class EditarTipoComponent implements OnInit{
  public faArrowAltCircleLeft  = faArrowAltCircleLeft;
  public listaTipoAtivoPorId: tipoAtivo = new tipoAtivo(); 
  public id = '' ;
  public form: FormGroup; 

  constructor(
    private activatedRoute: ActivatedRoute,
    public notaService: tipoAtivoService,
    public formBuilder : FormBuilder,
    public changeDetector: ChangeDetectorRef,
    public router: Router,
    private rest : tipoAtivoService)
    {
      this.id = this.activatedRoute.snapshot.params["id"];
      this.form = this.formBuilder.group({   
        id : this.activatedRoute.snapshot.params["id"],
        tipoNome: new FormControl('',[Validators.required,Validators.maxLength(30)]),
        
  })
    }

  public ListarTipoAtivoPorId(){
      this.notaService.ListarTipoAtivoPorId(this.id).subscribe(res => {
        this.listaTipoAtivoPorId = res.data;
        //console.log(this.listaTipoAtivoPorId);
       
      })
    }

  public EditarDados(){
    this.rest.EditarTipoAtivo(this.form.value).subscribe(rest =>[]);
  }

  ngOnInit(): void {
    this.ListarTipoAtivoPorId();
  }

}
