import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTipoComponent } from './cadastro-tipo.component';

describe('CadastroTipoComponent', () => {
  let component: CadastroTipoComponent;
  let fixture: ComponentFixture<CadastroTipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroTipoComponent]
    });
    fixture = TestBed.createComponent(CadastroTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
