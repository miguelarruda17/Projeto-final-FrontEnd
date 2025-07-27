import { Component, OnInit } from '@angular/core';
import { Fornecedor } from './fornecedor.model';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent implements OnInit {

  fornecedores!: Fornecedor[]; // Declaração da propriedade que armazenará a lista de fornecedores
  displayedColumns = ['forId', 'forNomeFantasia', 'forRazaoSocial', 'forCnpj', 'action']; // Colunas a serem exibidas na tabela

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
    // Método chamado ao inicializar o componente
    this.fornecedorService.read().subscribe(fornecedores => {
      this.fornecedores = fornecedores; // Atribui a resposta do serviço à propriedade fornecedores
      console.log(fornecedores); // Exibe a lista de fornecedores no console
    });
  }
}



