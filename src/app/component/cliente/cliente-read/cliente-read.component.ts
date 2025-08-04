import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes: Cliente[] = []; // Declaração da propriedade que armazenará a lista de fornecedores
  displayedColumns = ['cliId', 'cliNome', 'cliCpf', 'action']; // Colunas a serem exibidas na tabela

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    // Método chamado ao inicializar o componente
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes; // Atribui a resposta do serviço à propriedade fornecedores
      console.log(this.clientes); // Exibe a lista de fornecedores no console
    });
  }
}
