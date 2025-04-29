import { Component } from '@angular/core';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormaPagamento } from '../forma-pagamento-read/forma-pagamento.model';

@Component({
  selector: 'app-forma-pagamento-delete',
  templateUrl: './forma-pagamento-delete.component.html',
  styleUrls: ['./forma-pagamento-delete.component.css']
})
export class FormaPagamentoDeleteComponent {
  formaPagamento!: FormaPagamento; 

constructor(
  private formaPagamentoService: FormaPagamentoService, 
  private router: Router,
  private route: ActivatedRoute) { }

ngOnInit(): void {
  const fpgId = this.route.snapshot.paramMap.get('fpgId'); 
  this.formaPagamentoService.readById(fpgId!).subscribe(formaPagamento => { 
    this.formaPagamento = formaPagamento;
  });
}

deleteFormaPagamento(): void { 
  this.formaPagamentoService.delete(this.formaPagamento.fpgId!).subscribe(() => { 
    this.formaPagamentoService.showMessage('Forma de pagamento excluída com sucesso!');
    this.router.navigate(['/formaPagamento']); 
  });
}

cancel(): void {
  this.router.navigate(['/formaPagamento']); 
}

}
