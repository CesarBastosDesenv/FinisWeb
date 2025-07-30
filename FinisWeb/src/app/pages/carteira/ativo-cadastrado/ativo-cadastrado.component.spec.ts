import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivoCadastradoComponent } from './ativo-cadastrado.component';

describe('AtivoCadastradoComponent', () => {
  let component: AtivoCadastradoComponent;
  let fixture: ComponentFixture<AtivoCadastradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtivoCadastradoComponent]
    });
    fixture = TestBed.createComponent(AtivoCadastradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
