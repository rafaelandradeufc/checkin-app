import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PessoaFisicaComponent } from './pessoa-fisica/pessoa-fisica.component';
import { PessoaJuridicaComponent } from './pessoa-juridica/pessoa-juridica.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { MenuServicoComponent } from './menu-servico/menu-servico.component';
import { PresencaComponent } from './presenca/presenca.component';
import { AuthGuardService } from './guards/auth-guard.service'



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', canActivate: [AuthGuardService], component: HomeComponent, children: [
      { path: '', redirectTo: 'menu-servico', pathMatch: 'full' },
      { path: 'menu-servico', component: MenuServicoComponent },
      {
        path: 'menu-servico/pessoa', component: PessoaComponent
      },
      { path: 'menu-servico/pessoa/pessoa-fisica', component: PessoaFisicaComponent },
      { path: 'menu-servico/pessoa/pessoa-juridica', component: PessoaJuridicaComponent },
      { path: 'menu-servico/presenca', component: PresencaComponent },


    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
