import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fornecedor } from '../fornecedor-read/fornecedor.model';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit{

  fornecedor: Fornecedor = {
    forNomeFantasia: '',
    forCnpj: 0,
    forRazaoSocial: '', 
  }

  constructor(private fornecedorService: FornecedorService, 
    private router: Router) { }

    ngOnInit(): void {
        
    }

    createFornecedor(): void{
      this.fornecedorService.create(this.fornecedor).subscribe(() => {
        this.fornecedorService.showMessage('Fornecedor Criado!')
        this.router.navigate(['/fornecedor'])
      })
    }

    cancel(): void{
      this.router.navigate(['/fornecedor'])
    }
  }
