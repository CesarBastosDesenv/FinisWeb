import { Component } from '@angular/core';
import { BsModalRef }from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-cadastro-contas',
  templateUrl: './cadastro-contas.component.html',
  styleUrls: ['./cadastro-contas.component.css']
})
export class CadastroContasComponent {
  constructor(public bsModalRef: BsModalRef){}

  fecharModal(){
    this.bsModalRef.hide();
  }
}
