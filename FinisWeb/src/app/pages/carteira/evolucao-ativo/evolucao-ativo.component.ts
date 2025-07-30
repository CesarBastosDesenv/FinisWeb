import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import { faReplyAll } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

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

  constructor() {
    
    
  }
  
    ngOnInit(): void {
   
  }

}
