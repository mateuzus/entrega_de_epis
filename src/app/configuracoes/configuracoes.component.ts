import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThfDialogService } from '@totvs/thf-ui';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

  empresa = "1"
  estabelecimento = "1"

  constructor(
    private router: Router,
    public thfDialog: ThfDialogService,
  ) { }

  ngOnInit() {
    this.empresa = localStorage.getItem('ent_epi_empresa') || '1';
    this.estabelecimento = localStorage.getItem('ent_epi_estabelecimento') || '1';
  }

  salvar(){
    localStorage.setItem('ent_epi_empresa', this.empresa);
    localStorage.setItem('ent_epi_estabelecimento', this.estabelecimento);
    this.thfDialog.alert({title: 'Sucesso', message: 'Configurações atualizadas com sucesso!'});
    this.router.navigate(['epi-entregues']);
  }

}
