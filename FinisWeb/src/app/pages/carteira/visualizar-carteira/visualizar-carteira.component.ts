import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-visualizar-carteira',
  templateUrl: './visualizar-carteira.component.html',
  styleUrls: ['./visualizar-carteira.component.css']
})
export class VisualizarCarteiraComponent implements OnInit {
public faPlusCircle = faPlusCircle;
  constructor(){}

  ngOnInit(): void {
    
  }
}
