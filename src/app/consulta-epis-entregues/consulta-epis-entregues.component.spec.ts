import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEpisEntreguesComponent } from './consulta-epis-entregues.component';

describe('ConsultaEpisEntreguesComponent', () => {
  let component: ConsultaEpisEntreguesComponent;
  let fixture: ComponentFixture<ConsultaEpisEntreguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaEpisEntreguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaEpisEntreguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
