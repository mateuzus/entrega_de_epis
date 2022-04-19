import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { BiometricCrudComponent } from './biometric-crud/biometric-crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThfPageDynamicTableComponent, ThfPageDynamicEditComponent, ThfPageDynamicDetailComponent } from '@totvs/thf-templates';

// import { CustomersComponent } from './customers/customers.component';
// import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { ConsultaEpisEntreguesComponent } from './consulta-epis-entregues/consulta-epis-entregues.component';

const routes: Routes = [
  { path: '', redirectTo: '/epi-entregues', pathMatch: 'full' },
  /* { path: 'biometric-crud', component: BiometricCrudComponent }, */
  { path: 'epi-entregues', component: ConsultaEpisEntreguesComponent },
  { path: 'atender', component: AtendimentoComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent },
  // { path: 'customers', component: CustomersComponent },
  // { path: 'edit/:id', component: EditCustomerComponent },
  // { path: 'new-customer', component: EditCustomerComponent },
  // { path: 'orders', loadChildren: 'app/orders/orders.module#OrdersModule' },
  // { path: 'job-scheduler', loadChildren: 'app/job-scheduler/job-scheduler.module#JobSchedulerModule' },
  // { path: 'customers-template/detail/:id', component: ThfPageDynamicDetailComponent,
  //   data: {
  //     serviceApi: 'http://localhost:3000/customers'
  //   }
  // },
  // { path: 'customers-template/edit/:id', component: ThfPageDynamicEditComponent,
  //   data: {
  //     serviceApi: 'http://localhost:3000/customers'
  //   }
  // },
  // { path: 'customers-template/new', component: ThfPageDynamicEditComponent,
  //   data: {
  //     serviceApi: 'http://localhost:3000/customers'
  //   }
  // },
  // { path: 'customers-template', component: ThfPageDynamicTableComponent,
  //   data: {
  //     serviceApi: 'http://localhost:3000/customers'
  //   }
  // },
  // { path: 'orders-template/detail/:id', component: ThfPageDynamicDetailComponent,
  //   data: {
  //     serviceApi: 'http://localhost:3000/orders'
  //   }
  // },
  // { path: 'orders-template/edit/:id', component: ThfPageDynamicEditComponent,
  //   data: {
  //     serviceApi: 'http://localhost:3000/orders'
  //   }
  // },
  // { path: 'orders-template/new', component: ThfPageDynamicEditComponent,
  //   data: {
  //     serviceApi: 'http://localhost:3000/orders'
  //   }
  // },
  // { path: 'orders-template', component: ThfPageDynamicTableComponent,
  //   data: {
  //     serviceApi: 'http://localhost:3000/orders'
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
