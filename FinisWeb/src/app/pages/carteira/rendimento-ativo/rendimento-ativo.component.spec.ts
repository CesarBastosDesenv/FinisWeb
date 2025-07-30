import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendimentoAtivoComponent } from './rendimento-ativo.component';

describe('RendimentoAtivoComponent', () => {
  let component: RendimentoAtivoComponent;
  let fixture: ComponentFixture<RendimentoAtivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RendimentoAtivoComponent]
    });
    fixture = TestBed.createComponent(RendimentoAtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
