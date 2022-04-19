import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titleToolbar = 'Entrega de EPIs';

  menus = [
    /* { label: 'Cadastrar Biometria', link: './biometric-crud' }, */
    { label: 'Consultar EPIs entregues', link: './epi-entregues' },
    { label: 'Configurações', link: './configuracoes' },
    // { label: 'CRUD', link: './customers' },
    // { label: 'Master Detail', link: './orders' },
    // {
    //   label: 'Templates',
    //   subItems: [
    //     { label: 'Agendamento', link: './job-scheduler' },
    //     { label: 'CRUD', link: './customers-template'},
    //     { label: 'Master Detail', link: './orders-template'}
    //   ]
    // }
  ];
}
