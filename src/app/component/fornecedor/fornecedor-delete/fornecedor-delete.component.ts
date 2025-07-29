import { Component } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-delete',
  templateUrl: './fornecedor-delete.component.html',
  styleUrls: ['./fornecedor-delete.component.css']
})
export class FornecedorDeleteComponent {
  fornecedor!: Fornecedor; 

  constructor(
    private fornecedorService: FornecedorService, 
    private router: Router,
    private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    const proId = this.route.snapshot.paramMap.get('forId');
    this.fornecedorService.readById(proId!).subscribe(fornecedor => { 
      this.fornecedor = fornecedor; 
    });
  }
  
  deleteFornecedor(): void { 
    this.fornecedorService.delete(this.fornecedor.forId!).subscribe(() => { 
      this.fornecedorService.showMessage('Fornecedor excluído com sucesso!'); 
      this.router.navigate(['/fornecedores']); 
    });
  }
  
  cancel(): void {
    this.router.navigate(['/fornecedores']); 
  }
}
