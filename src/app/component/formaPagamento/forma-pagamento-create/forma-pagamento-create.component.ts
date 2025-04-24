import { Component, OnInit } from '@angular/core';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { Router } from '@angular/router';
import { FormaPagamento } from '../forma-pagamento-read/forma-pagamento.model';

@Component({
  selector: 'app-forma-pagamento-create',
  templateUrl: './forma-pagamento-create.component.html',
  styleUrls: ['./forma-pagamento-create.component.css']
})
export class FormaPagamentoCreateComponent implements OnInit{

  formaPagamento: FormaPagamento = {
    tipoPagamento: "",
    status: "",
    discricao: ""
}

constructor(private formaPagamentoService: FormaPagamentoService,
  private router: Router) { }

  ngOnInit(): void {

  }
  createFormaPagamento(): void{
    this.formaPagamentoService.create(this.formaPagamento).subscribe(() => {
      this.formaPagamentoService.showMessage('Forma de pagamento Criada!')
      this.router.navigate(['/formaPagamento'])
    })
  }

  cancel(): void{
    this.router.navigate(['/formaPagamento'])
  }
}

