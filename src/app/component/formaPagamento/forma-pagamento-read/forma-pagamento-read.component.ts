import { Component } from '@angular/core';
import { FormaPagamento } from './forma-pagamento.model';
import { FormaPagamentoService } from '../forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento-read',
  templateUrl: './forma-pagamento-read.component.html',
  styleUrls: ['./forma-pagamento-read.component.css']
})
export class FormaPagamentoReadComponent {

  formaPagamento!: FormaPagamento[]
  displayedColumns = ['idFormaPagamento', 'tipoPagamento', 'status', 'discricao', 'action']

  constructor(private formaPagamentoService: FormaPagamentoService) { }

  ngOnInit(): void {
    this.formaPagamentoService.read().subscribe(formaPagamento => {
      this.formaPagamento = formaPagamento
      console.log(formaPagamento);
       
    })
  }

}
