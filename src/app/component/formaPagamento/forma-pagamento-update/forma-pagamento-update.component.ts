import { Component } from '@angular/core';
import { FormaPagamento } from '../forma-pagamento-read/forma-pagamento.model';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento-update',
  templateUrl: './forma-pagamento-update.component.html',
  styleUrls: ['./forma-pagamento-update.component.css']
})
export class FormaPagamentoUpdateComponent {
  formaPagamento!: FormaPagamento; 
constructor(private formaPagamentoService: FormaPagamentoService, 
  private router: Router,
  private route: ActivatedRoute) {}

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  this.formaPagamentoService.readById(id!).subscribe((formaPagamento: FormaPagamento) => { 
    this.formaPagamento = formaPagamento; 
  });
}

updateFormaPagamento(): void { 
  this.formaPagamentoService.update(this.formaPagamento).subscribe(() => { 
    this.formaPagamentoService.showMessage('Forma de pagamento atualizada com sucesso!'); 
    this.router.navigate(['/formaPagamento']); 
  });
}

cancel(): void {
  this.router.navigate(['/formaPagamento']); 
}

}
