import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt-PT';
import { LOCALE_ID } from '@angular/core';
import { PessoaFisicaComponent } from './pessoa-fisica/pessoa-fisica.component';
import { PessoaJuridicaComponent } from './pessoa-juridica/pessoa-juridica.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { MenuServicoComponent } from './menu-servico/menu-servico.component';
import { PresencaComponent } from './presenca/presenca.component';
import { MaskDirective } from './mask.directive';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
registerLocaleData(localePt);




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PessoaFisicaComponent,
    PessoaJuridicaComponent,
    PessoaComponent,
    MenuServicoComponent,
    PresencaComponent,
    MaskDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [DatePipe,{provide: LOCALE_ID, useValue: 'pt-PT'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
