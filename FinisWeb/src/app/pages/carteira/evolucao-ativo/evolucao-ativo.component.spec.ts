import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucaoAtivoComponent } from './evolucao-ativo.component';

describe('EvolucaoAtivoComponent', () => {
  let component: EvolucaoAtivoComponent;
  let fixture: ComponentFixture<EvolucaoAtivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvolucaoAtivoComponent]
    });
    fixture = TestBed.createComponent(EvolucaoAtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
