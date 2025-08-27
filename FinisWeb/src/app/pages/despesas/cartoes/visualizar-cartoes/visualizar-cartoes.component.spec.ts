import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarCartoesComponent } from './visualizar-cartoes.component';

describe('VisualizarCartoesComponent', () => {
  let component: VisualizarCartoesComponent;
  let fixture: ComponentFixture<VisualizarCartoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarCartoesComponent]
    });
    fixture = TestBed.createComponent(VisualizarCartoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
