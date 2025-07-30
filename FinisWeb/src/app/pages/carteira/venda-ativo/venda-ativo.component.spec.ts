import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaAtivoComponent } from './venda-ativo.component';

describe('VendaAtivoComponent', () => {
  let component: VendaAtivoComponent;
  let fixture: ComponentFixture<VendaAtivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendaAtivoComponent]
    });
    fixture = TestBed.createComponent(VendaAtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
