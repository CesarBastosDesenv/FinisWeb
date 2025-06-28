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


@NgModule({
  declarations: [
    AppComponent,
    //dashboard
    DashboardComponent,
    //Carteira
    VisualizarCarteiraComponent,
    //Administracao
    CadastroTipoComponent,
    EditarTipoComponent,
    VisualizarTipoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
