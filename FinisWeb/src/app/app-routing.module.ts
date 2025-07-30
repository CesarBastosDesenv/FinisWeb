import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//dashboard
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { VisualizarCarteiraComponent } from './pages/carteira/visualizar-carteira/visualizar-carteira.component';
//Administracao
import { VisualizarTipoComponent } from './pages/administracao/finis/tipos/visualizar-tipo/visualizar-tipo.component';
import { CadastroTipoComponent } from './pages/administracao/finis/tipos/cadastro-tipo/cadastro-tipo.component';
import { EditarTipoComponent } from './pages/administracao/finis/tipos/editar-tipo/editar-tipo.component';
import { NovoAtivoComponent } from './pages/carteira/novo-ativo/novo-ativo.component';
import { VendaAtivoComponent } from './pages/carteira/venda-ativo/venda-ativo.component';
import { EvolucaoAtivoComponent } from './pages/carteira/evolucao-ativo/evolucao-ativo.component';
import { AtivoCadastradoComponent } from './pages/carteira/ativo-cadastrado/ativo-cadastrado.component';
import { AporteAtivosComponent } from './pages/carteira/aporte-ativos/aporte-ativos.component';
import { RendimentoAtivoComponent } from './pages/carteira/rendimento-ativo/rendimento-ativo.component';
import { VisualizarDespesasRecorrentesComponent } from './pages/despesas/despesasRecorrentes/visualizar-despesas-recorrentes/visualizar-despesas-recorrentes.component';
import { EditarDespesasRecorrentesComponent } from './pages/despesas/despesasRecorrentes/editar-despesas-recorrentes/editar-despesas-recorrentes.component';
import { VisualizarContasComponent } from './pages/despesas/contas/visualizar-contas/visualizar-contas.component';

const routes: Routes = [
  //dashboard
  { path: '', component: DashboardComponent },
  
  //Carteira
  { path: 'visualizarCarteira', component: VisualizarCarteiraComponent },
  { path: 'novoAtivo', component: NovoAtivoComponent },
  { path: 'vendaAtivo/:id', component: VendaAtivoComponent },
  { path: 'evolucaoAtivo/:id', component: EvolucaoAtivoComponent },
  { path: 'ativoCadastrado', component: AtivoCadastradoComponent },
  { path: 'aporteAtivo/:id', component: AporteAtivosComponent },
  { path: 'rendimentoAtivo/:id', component: RendimentoAtivoComponent },

  //Despesas
  { path: 'despesasRecorrentes', component: VisualizarDespesasRecorrentesComponent },
  { path: 'editarDespesasRecorrentes/:id', component: EditarDespesasRecorrentesComponent },
  { path: 'visualizarContas', component: VisualizarContasComponent },

  //Administracao
  { path: 'visualizarTipo', component: VisualizarTipoComponent },
  { path: 'cadastrarTipo', component: CadastroTipoComponent },
  { path: 'editarTipo/:id', component: EditarTipoComponent },


  { path: '**', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
