import { Component } from '@angular/core';
import { Fornecedor } from '../fornecedor-read/fornecedor.model';
import { FornecedorService } from '../fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.css']
})
export class FornecedorUpdateComponent {
  fornecedor!: Fornecedor; 

constructor(private fornecedorService: FornecedorService, 
  private router: Router,
  private route: ActivatedRoute) {}

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  this.fornecedorService.readById(id!).subscribe((fornecedor: Fornecedor) => { 
    this.fornecedor = fornecedor; 
  });
}

updateFornecedor(): void {  this.updateFornecedor
  this.fornecedorService.update(this.fornecedor).subscribe(() => { 
    this.fornecedorService.showMessage('Fornecedor atualizado com sucesso!'); 
    this.router.navigate(['/fornecedores']); 
  });
}

cancel(): void {
  this.router.navigate(['/fornecedores']);
}

}
