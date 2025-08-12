import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//dashboard
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
//Carteira
import { VisualizarCarteiraComponent } from './pages/carteira/visualizar-carteira/visualizar-carteira.component';
//administracao
import { CadastroTipoComponent } from './pages/administracao/finis/tipos/cadastro-tipo/cadastro-tipo.component';
import { EditarTipoComponent } from './pages/administracao/finis/tipos/editar-tipo/editar-tipo.component';
import { VisualizarTipoComponent } from './pages/administracao/finis/tipos/visualizar-tipo/visualizar-tipo.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovoAtivoComponent } from './pages/carteira/novo-ativo/novo-ativo.component';
import { VendaAtivoComponent } from './pages/carteira/venda-ativo/venda-ativo.component';
import { EvolucaoAtivoComponent } from './pages/carteira/evolucao-ativo/evolucao-ativo.component';
import { AtivoCadastradoComponent } from './pages/carteira/ativo-cadastrado/ativo-cadastrado.component';
import { AporteAtivosComponent } from './pages/carteira/aporte-ativos/aporte-ativos.component';
import { RendimentoAtivoComponent } from './pages/carteira/rendimento-ativo/rendimento-ativo.component';
import { VisualizarDespesasRecorrentesComponent } from './pages/despesas/despesasRecorrentes/visualizar-despesas-recorrentes/visualizar-despesas-recorrentes.component';
import { EditarDespesasRecorrentesComponent } from './pages/despesas/despesasRecorrentes/editar-despesas-recorrentes/editar-despesas-recorrentes.component';
import { VisualizarContasComponent } from './pages/despesas/contas/visualizar-contas/visualizar-contas.component';
import { CadastrarContasComponent } from './pages/despesas/contas/cadastrar-contas/cadastrar-contas.component';
import { CadastrarMovimentacaoComponent } from './pages/despesas/contas/cadastrar-movimentacao/cadastrar-movimentacao.component';
import { NgChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VisualizarCarteiraComponent,
    CadastroTipoComponent,
    EditarTipoComponent,
    VisualizarTipoComponent,
    NovoAtivoComponent,
    VendaAtivoComponent,
    EvolucaoAtivoComponent,
    AtivoCadastradoComponent,
    AporteAtivosComponent,
    RendimentoAtivoComponent,
    VisualizarDespesasRecorrentesComponent,
    EditarDespesasRecorrentesComponent,
    VisualizarContasComponent,
    CadastrarContasComponent,
    CadastrarMovimentacaoComponent,
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
