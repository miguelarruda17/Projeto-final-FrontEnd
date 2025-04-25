import { Component, OnInit } from '@angular/core';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { Router } from '@angular/router';
import { FormaPagamento } from '../forma-pagamento-read/forma-pagamento.model';

@Component({
  selector: 'app-forma-pagamento-create',
  templateUrl: './forma-pagamento-create.component.html',
  styleUrls: ['./forma-pagamento-create.component.css']
})
export class FormaPagamentoCreateComponent implements OnInit {

  // Objeto que representa a forma de pagamento
  formaPagamento: FormaPagamento = {
    fpgDescricao: "",
    fpgTipo: ""
  }

  // Injeção de dependências no construtor
  constructor(private formaPagamentoService: FormaPagamentoService,
              private router: Router) { }

  // Método chamado ao inicializar o componente
  ngOnInit(): void {
    // Aqui você pode inicializar dados ou fazer chamadas de API, se necessário
  }

  // Método para criar uma nova forma de pagamento
  createFormaPagamento(): void {
    this.formaPagamentoService.create(this.formaPagamento).subscribe(() => {
      this.formaPagamentoService.showMessage('Forma de pagamento Criada!'); // Mensagem de sucesso
      this.router.navigate(['/formaPagamento']); // Redireciona para a lista de formas de pagamento
    });
  }

  // Método para cancelar a operação e redirecionar
  cancel(): void {
    this.router.navigate(['/formaPagamento']); // Redireciona para a lista de formas de pagamento
  }
}

