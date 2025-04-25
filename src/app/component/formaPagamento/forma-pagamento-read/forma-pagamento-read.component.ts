import { Component } from '@angular/core';
import { FormaPagamento } from './forma-pagamento.model';
import { FormaPagamentoService } from '../forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento-read',
  templateUrl: './forma-pagamento-read.component.html',
  styleUrls: ['./forma-pagamento-read.component.css']
})
export class FormaPagamentoReadComponent {

  formaPagamento!: FormaPagamento[]; // Declaração da propriedade que armazenará a lista de formas de pagamento
  displayedColumns = ['fpgId', 'fpgDescricao', 'fpgTipo', 'action']; // Colunas a serem exibidas na tabela

  constructor(private formaPagamentoService: FormaPagamentoService) { }

  ngOnInit(): void {
    // Método chamado ao inicializar o componente
    this.formaPagamentoService.read().subscribe(formaPagamento => {
      this.formaPagamento = formaPagamento; // Atribui a resposta do serviço à propriedade formaPagamento
      console.log(formaPagamento); // Exibe a lista de formas de pagamento no console
    });
  }
}