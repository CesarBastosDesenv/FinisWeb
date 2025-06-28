import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//dashboard
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { VisualizarCarteiraComponent } from './pages/carteira/visualizar-carteira/visualizar-carteira.component';
//Administracao
import { VisualizarTipoComponent } from './pages/administracao/finis/tipos/visualizar-tipo/visualizar-tipo.component';

const routes: Routes = [
  //dashboard
  { path: '', component: DashboardComponent },
  
  //Carteira
  { path: 'visualizarCarteira', component: VisualizarCarteiraComponent },
  //Administracao
  { path: 'visualizarTipo', component: VisualizarTipoComponent },


  { path: '**', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
