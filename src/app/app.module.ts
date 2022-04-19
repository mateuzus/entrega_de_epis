import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ThfLoadingModule, ThfModule } from '@totvs/thf-ui';
import { ThfFieldModule } from '@totvs/thf-ui';
import { ThfI18nConfig, ThfI18nModule } from '@totvs/thf-ui/services/thf-i18n';
import { ThfTemplatesModule } from '@totvs/thf-templates';

import { generalEn } from './literals/i18n/general-en';
import { generalPt } from './literals/i18n/general-pt';

import { AppComponent } from './app.component';
// import { CustomersModule } from './customers/customers.module';
import { AppRoutingModule } from './app-routing.module';
import { BiometricCrudComponent } from './biometric-crud/biometric-crud.component';
import { ConsultaEpisEntreguesComponent } from './consulta-epis-entregues/consulta-epis-entregues.component';
import { AtendimentoComponent } from './atendimento/atendimento.component';

import { AngularBleModule } from '@nebulae/angular-ble';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';


const i18nConfig: ThfI18nConfig = {
  default: {
    context: 'general',
    cache: true
  },
  contexts: {
    general: {
      'pt-BR': generalPt,
      'en-US': generalEn
    },
  }
};

@NgModule({
  declarations: [
    AppComponent,
    BiometricCrudComponent,
    ConsultaEpisEntreguesComponent,
    AtendimentoComponent,
    ConfiguracoesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    // CustomersModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    ThfModule,
    ThfI18nModule.config(i18nConfig),
    ThfTemplatesModule,
    AngularBleModule.forRoot(),
    ThfLoadingModule,
    ThfFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
